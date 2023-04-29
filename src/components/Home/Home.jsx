import React from 'react'
import './home.css'
import Social from './Social'
import Data from "./Data"



const Home = () => {
  return (
    <section className="home section container" id="home">
        <div className="head__content grid">
        <div className="home__img">
          
        </div>
        <Data/>
        </div>
        <Social/>
    </section>
    
  )
}

export default Home