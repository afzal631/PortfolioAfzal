import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box ">
      <i class="fa fa-briefcase" ></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Fresher <br/> </span>
        <div className="overlay"></div>
      </div>
      <div className="about__box">
      <i class="fa fa-star" aria-hidden="true"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">4 + Projects  </span>   
        <div className="overlay"></div>     
      </div>
      <div className="about__box">
      <i class="fa fa-headphones" ></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle ">Online 24/7  </span>
        <div className="overlay"></div>
      </div>

    </div>
  )
}

export default Info