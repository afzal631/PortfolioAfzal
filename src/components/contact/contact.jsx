import React from 'react'
import "./contact.css"
{/* <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link> */}


const Contact = () => {
  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">
                    {/* <div className="contact__card">
                        <i className="fa fa contact__card-icon"></i>
                        <h3 className="contact__card-title"></h3>
                        <span className="contact__card-data"></span>
                        <a href="" className="contact__button">Write me{" "} <i className="fa fa-arrow-right"></i></a>
                    </div> */}

                    <div className="contact__card">
                        <i className="fa fa-envelope-o contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">afzalmd03@gmail.com</span>
                        <a href="mailto:afzalmd03@gmail.com.com"  className="contact__button">  Write me{" "} <div className="contact__button-icon"><i className='fa fa-arrow-right'></i></div></a>
                        
                    </div>

                    <div className="contact__card">
                        <i className="fa fa-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">6362983220</span>
                        <a href="https://web.whatsapp.com/" className="contact__button"> Write me{" "} <div className="contact__button-icon"><i className='fa fa-arrow-right'/></div> </a>
                        
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Feel free to give feedback!</h3>

                <form  className="contact__form" action="mailto:afzalmd03@gmail.com" method="post" enctype="text/plain">
                    <div className="contact__form-div">
                        {/* <lable className="contact__form-tag">Name</lable> */}
                        <input type="text" name="name" className="contact__form-input" placeholder='Insert your name'/>
                    </div>

                    <div className="contact__form-div">
                        {/* <lable className="contact__form-tag">Email</lable> */}
                        <input type="email" name="email" className="contact__form-input" placeholder='Insert your email'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        {/* <lable className="contact__form-tag">Comment</lable> */}
                        <textarea name="comments" cols="30" rows="10" placeholder="Leave you're comments" className='contact__form-input'></textarea>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <button type='submit' className='buttons button--flex'>Send Message <i class=" fa fa-paper-plane-o"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
