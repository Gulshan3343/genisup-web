import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Ourservice from '../components/ourservice'
import Form from '../components/form'
import Footer from '../components/footer'
function homepage() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Ourservice/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default homepage