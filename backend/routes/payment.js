const express = require('express')
const ngrok = require('ngrok')
const request = require('request')
const getTimeStamp = require('../utils/timestamp')
const router = express.Router()

router.post('/', async (req, res) => {
    const {phone, amount, bill_id} = req.body
    const key = process.env.SAFARICOM_CONSUMER_KEY;
    const secret = process.env.SAFARICOM_CONSUMER_SECRET;
    const token_url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"

    const auth = Buffer.from(`${key}:${secret}`).toString('base64')
    let api_access_token = ''
    console.log(auth)

    // get access token
    request(
        {
            url: token_url,
            headers: {
                "Authorization": 'Basic ' + auth
            }
        },
        (error, _, body) => {
            if (error) {
                res.status(401).send({
                    "message": 'Something went wrong when trying to process your payment',
                    "error":error.message
                })
            }
            else {
                api_access_token = JSON.parse(body).access_token
                console.log('API Access Token', api_access_token)
            }
        }
    )

    // initiate STK push
    try{

        const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

        const timestamp = getTimeStamp()
        //shortcode + passkey + timestamp
        const password = new Buffer.from(process.env.BUSINESS_SHORT_CODE + process.env.PASS_KEY + timestamp).toString('base64')
        // create callback url
        const callback_url = await ngrok.connect(process.env.PORT)
        const api = ngrok.getApi()
        await api.listTunnels()

        console.log("callback ",callback_url)
        console.log(api_access_token)
        request(
            {
                url: url,
                method: "POST",
                headers: {
                    "Authorization": 'Bearer ' + api_access_token
                },
                json: {
                    "BusinessShortCode": process.env.BUSINESS_SHORT_CODE,
                    "Password": password,
                    "Timestamp": timestamp,
                    "TransactionType": "CustomerPayBillOnline",
                    "Amount": amount,
                    "PartyA": phone,
                    "PartyB": process.env.BUSINESS_SHORT_CODE,
                    "PhoneNumber": phone,
                    "CallBackURL": `${callback_url}/payment/callback`,
                    "AccountReference": "PayGrid Ltd",
                    "TransactionDesc": "Bill Payment"
                }
            },
            function (e, _, body) {
                if (e) {
                    console.error('error with stk push')
                    res.status(503).send({
                        message:"Error with the stk push",
                        error : e
                    })
                } else {
                    res.status(200).json({msg: 'success'})
                }
            }
        )
    }catch (e) {
        console.error("Error while trying to create LipaNaMpesa details",e)
        res.status(503).send({
            message:"Something went wrong while trying to create LipaNaMpesa details. Contact admin",
            error : e
        })
    }
})

router.post('/callback', (req, res) => {
    if(req.body.status !== 200) {
        res.status(req.body.status).send({message:"An error occurred"})
    } else {
        res.status(200).send({message:"success"})
    }
})

module.exports = router
