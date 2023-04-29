import React from "react";
import { useState } from "react";
import "./header.css";



const Header =()=>{
    const[Toggle, showMenu]= useState(false);
    return(

        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Mohammed Afzal</a>
                <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="fa fa-home nav__link active-link">
                                <h6 className="  nav__icon">Home</h6>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="fa fa-user nav__link">
                            <h6 className=" nav__icon">About </h6>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="fa fa-file nav__link">
                                <h6 className="nav__icon">Skills</h6>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#quali" className="fa fa-address-card nav__link">
                                <h6 className=" nav__icon">Attribute</h6>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="fa fa-phone nav__link">
                                <h6 className=" nav__icon">Projects</h6>
                            </a>
                        </li>

                        
                        <li className="nav__item">
                            <a href="#contact" className="fa fa-address-book nav__link">
                                <h6 className=" nav__icon">Contact</h6>
                            </a>
                        </li>    
                                      
                        </ul>
                        <i className="fa fa-close nav__close" onClick={()=>showMenu(!Toggle)}></i>
                    
                </div>
                <div className="nav__toggle" onClick={()=>showMenu (!Toggle)}>
                    <i className="fa fa-ellipsis-h  nav__toggle"></i>  
                </div>
                
            </nav>
        </header>
    )
}

export default Header