import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpeg"
import Resume from "../../assets/resume.pdf"
import Info from "./Info"

const About = () => {
  return (
    <section className="about section container" id="about">
        <h2 className="section__title">About Me</h2>
       <center><span className="section__subtitle ">My introduction</span></center> 

        <div className="about__container container grid">
          <div className="about__image">
          <img src={AboutImg} alt="" className="about__img" />
          </div>
           

            <div className="about__data ">
                <Info/>

                <p className="about__description">
                    I'm a Frontend Developer. I create web pages UI / UX user interfaces. I also have knowledge about many language.
                    To know more about my skills download my resume below.  
                </p>
                <a download="resume.pdf" href={Resume} className="btn btn-outline-dark btn-lg ">Download CV  <i class="fa fa-file-pdf-o" ></i>
</a>
            </div>
        </div>
    </section>
  )
}

export default About