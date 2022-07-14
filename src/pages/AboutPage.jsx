import React from 'react'
import Cards from '../components/shared/Cards'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Cards>
      <div className='about'>
        <h1>
          About this project
        </h1>
        <p>this is a React app tp leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p> <Link to="/">Back to Home</Link> </p>
      </div>
    </Cards>
  )
}

export default AboutPage