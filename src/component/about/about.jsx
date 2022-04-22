import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {BiUser} from 'react-icons/bi'
import {FaPhotoVideo} from 'react-icons/fa'


const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
             
            <article className='about__card'>
              <BiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <FaPhotoVideo className='about__icon'/>
              <h5>Project</h5>
              <small>80+ Complete</small>
            </article>

          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum saepe odit consequuntur. Nam aliquam animi quaerat sequi alias, debitis perspiciatis numquam? Velit reprehenderit ut odio impedit sunt rem eum?
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about