import React, { useState } from 'react'
import NavBar from '../components/landing/NavBar'
import Hero from '../components/landing/Hero'
import LogIn from '../components/customer/LogIn'
import Register from '../components/customer/Register'

const Landing = () => {
    const [page, setPage] = useState('register')

    return (
        <>
            <NavBar />
            {page === 'hero' && <Hero />}
            {page === 'login' && <LogIn />}
            {page === 'register' && <Register />}
        </>
    )
}

export default Landing
