import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

function portofolio() {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
         <div className="portfolio__item-cta">
            <a href=''className='btn'>Instagram</a>
            <a href=''className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
         <div className="portfolio__item-cta">
            <a href=''className='btn'>Instagram</a>
            <a href=''className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
         <div className="portfolio__item-cta">
            <a href=''className='btn'>Instagram</a>
            <a href=''className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
         <div className="portfolio__item-cta">
            <a href=''className='btn'>Instagram</a>
            <a href=''className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
         <div className="portfolio__item-cta">
            <a href=''className='btn'>Instagram</a>
            <a href=''className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
         <div className="portfolio__item-cta">
            <a href=''className='btn'>Instagram</a>
            <a href=''className='btn btn-primary'>See</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default portofolio