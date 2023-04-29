import React,{useEffect, useState} from 'react'
import "./qualification.css"

const Qualification = () => {
  const [toggleState,setToggleState]= useState(1);
  const toggleTab=(index)=>{
    setToggleState(index);
  }
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setToggleState((toggleState)= toggleState+1)
  //   },1000)
  // })


  return (
    <section className="qualification section"id ="quali">
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My Personel journey</span>

    <div className="qualification__container container">
      <div className="qualification__tabs">
        <div className={toggleState ===1?"qualification__button qualification__active button--flex":"qualification__button button--flex"}
        onClick={()=>toggleTab(1)}>
          <i className='fa fa-book'></i>{" "} Education
          
        </div>
        <div className={toggleState ===2?"qualification__button qualification__active button--flex":"qualification__button button--flex"}
        onClick={()=>toggleTab(2)}>
          <i className='fa fa-briefcase'></i>{" "} Experience
          {/* <i class="fa-duotone fa-books"></i> */}
        </div>
      </div>
      <div className="qualification__sections">
          <div className={toggleState===1?"qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
              <div style={{textAlign:"end"}}>
                <h3 className='qualification__title'>Web Design</h3>
                <span className='qualification__subtitle'>Rajarajeswari College Of Engineering </span>
                <div className='qualification__calender'>
                  <i className='fa fa-study'></i> Graduated - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className='qualification__title'>Computer Science And Engineering</h3>
                <span className='qualification__subtitle'>Rajarajeswari College Of Engineering </span>
                <div className='qualification__calender'>
                  <i className='fa fa-study'></i> Graduated - 2022
                </div>
              </div>

              
            </div>


            <div className="qualification__data">
              <div style={{textAlign:"end"}}>
                <h3 className='qualification__title'>Web Development</h3>
                <span className='qualification__subtitle'>Rajarajeswari College Of Engineering </span>
                <div className='qualification__calender'>
                  <i className='fa fa-study'></i> Graduated - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              {/* <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> */}
              

              
            </div>
          </div>


          <div className={toggleState===2?"qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
            <div style={{textAlign:"end"}}>
                <h3 className='qualification__title'>Software Engineering Trainee (march - august)</h3>
                <h3 className='qualification__title'>Associate Software Engineering (july-current)</h3>
                <span className='qualification__subtitle'>Hexaware technologies </span>
                <div className='qualification__calender'>
                  <i className='fa fa-study'></i> march 2022- current
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className='qualification__title'>UX Designer</h3>
                <span className='qualification__subtitle'>Rajarajeswari College Of Engineering </span>
                <div className='qualification__calender'>
                  <i className='fa fa-study'></i> Graduated - 2022
                </div>
              </div>

              
            </div>


            <div className="qualification__data">
              <div style={{textAlign:"end"}}>
                <h3 className='qualification__title'>Web Designer</h3>
                <span className='qualification__subtitle'>Rajarajeswari College Of Engineering </span>
                <div className='qualification__calender'>
                  <i className='fa fa-study'></i> Graduated - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>
        </div>
    </div>
    </section>
  
  )
}

export default Qualification