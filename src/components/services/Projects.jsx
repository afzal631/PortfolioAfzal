import React from 'react'
import creativeimg from "../../assets/creatives.jpg"
import Softwaredev from "../../assets/softwaredev.jpg"
import Videoedit from "../../assets/videoediting.jpg"
import Itsupport from "../../assets/itsupport.jpg"
import "./projects.css"

const Projects = () => {
  return (
    <section className="services section "id='projects'>
        {/* <div className="grids grid">
            <div className="right"></div>
        </div>
        <div className="grids2 grid">
        <div className="leftt"></div>
        </div>
        <div className="grids3 grid">
        <div className="rightt"></div>
        </div>
        <div className="grids4 grid">
        <div className="left"></div>
        </div> */}
        
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My Projects</span>
        <div className="ser grid">
            <div className="imgs"><img src={creativeimg} alt="" className="__logo "/></div>
            <div className="services__description">
                <div className="services__info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. I
                    llo blanditiis ipsam sunt. Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Id consectetur eligendi
                     accusantium reiciendis error nemo
                </div>
            </div>
        </div>
            
        <div className="ser grid ">
        <div className="services__description">
                <div className="services__infos">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. I
                    llo blanditiis ipsam sunt. Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Id consectetur eligendi
                     accusantium reiciendis error nemo
                </div>
            </div>
            
            <div className="imgs"><img src={Softwaredev} alt="" className="__logo "/></div>
        </div>
        <div className="ser grid rev">
        <div className="imgs"><img src={Videoedit} alt="" className="__logo "/></div>
        <div className="services__description">
                <div className="services__info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. I
                    llo blanditiis ipsam sunt. Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Id consectetur eligendi
                     accusantium reiciendis error nemo
                </div>
            </div></div>
        <div className="ser grid rev">
        <div className="services__description ">
                <div className="services__infos">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. I
                    llo blanditiis ipsam sunt. Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Id consectetur eligendi
                     accusantium reiciendis error nemo
                </div>
            </div> <div className="imgs"><img src={Itsupport} alt="" className="__logo "/></div>
        </div>
    </section>
  )
}

export default Projects