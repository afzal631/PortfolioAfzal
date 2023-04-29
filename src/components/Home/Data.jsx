import React from 'react'
import './data.css'

const Data = () => {
  return (
    <div className="home__data ">
        <div className="anime3 ">
          <div className=" box three"></div>
        </div>
        <div className="anime4 ">
        <div className="box four"></div>
        </div>
        <div className="anime5 ">
        <div className="box five"></div>
        </div>
        <div className="anime6 ">
        <div className="box six"></div>
        </div>


        <h1 className="home__title">Mohammed Afzal <i class="fax fa fa-code"></i>
        <p className='fa fa-greet'></p>
        <i class="fa fa-hat-witch"></i>
        </h1>
        <hr className='line'></hr>
        <h3 className='home__subtitle'> _______Front-end Developer</h3>
        <p className='home_description'>"I'm creative designer based in chennai, and I'm very passionate and dedicated to my work."</p>
        <a href='#contact' className='button button--flex'>Say Hello <i class="fa fa-paper-plane"></i></a>



    </div>
  )
}

export default Data