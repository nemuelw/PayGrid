import React from 'react'
import NavBar from '../components/landing/NavBar'
import Hero from '../components/landing/Hero'

const Landing = () => {
  return (
    <>
        <NavBar />
        <div style={{height: '89vh'}} className="d-flex align-items-center justify-content-center">
            <Hero />
        </div>
    </>
  )
}

export default Landing
