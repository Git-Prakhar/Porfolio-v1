import React from 'react'
import foodiev1 from '../images/foodiev1.png'
import foodiev2 from '../images/foodiev2.png'

export default function Projects() {
  return (
    <div className="section">
      <div className="df-col" style={{ gap: '1.875rem', marginTop: '5rem' }}>
        <div className="df" style={{ gap: '4.75rem' }}>
          <div className="card-img df font-30-600 text-black" style={{ backgroundColor: '#F8F0FB' }}>This Portfolio</div>
          <div className="df-col" style={{ gap: '1.125rem' }}>
            <div className="font-25-400 text-white">This Portfolio</div>
            <div className="df" style={{ gap: '0.938rem' }}>
              <div className="card-tag font-15-400 op-70 text-white">React</div>
              <div className="card-tag font-15-400 op-70 text-white">Figma</div>
              <div className="card-tag font-15-400 op-70 text-white">SASS</div>
            </div>
          </div>
        </div>
        <div className="df" style={{ gap: '4.75rem' }}>
          <img src={foodiev2} alt='project2' className="card-img"></img>
          <div className="df-col" style={{ gap: '1.125rem' }}>
            <div className="font-25-400 text-white">Foodie Version 2</div>
            <div className="df" style={{ gap: '0.938rem' }}>
              <div className="card-tag font-15-400 op-70 text-white">React</div>
              <div className="card-tag font-15-400 op-70 text-white">Figma</div>
            </div>
            <div className="df" style={{ gap: '1.625rem' }}>
              <a href='https://github.com/Git-Prakhar/React-Foodie' target='_blank'  rel='noreferrer' className="card-btn font-15-400 text-white">Code</a>
              <a href='https://react-foodie-nine.vercel.app/' target='_blank'  rel='noreferrer'className="card-btn font-15-400 text-white">Live</a>
            </div>
          </div>
        </div>
        <div className="df" style={{ gap: '4.75rem' }}>
          <img src={foodiev1} alt='project2' className="card-img"></img>
          <div className="df-col" style={{ gap: '1.125rem' }}>
            <div className="font-25-400 text-white">Foodie Version 1</div>
            <div className="df" style={{ gap: '0.938rem' }}>
              <div className="card-tag font-15-400 op-70 text-white">HTML</div>
              <div className="card-tag font-15-400 op-70 text-white">CSS</div>
              <div className="card-tag font-15-400 op-70 text-white">Javascript</div>
            </div>
            <div className="df" style={{ gap: '1.625rem' }}>
              <a href='https://github.com/Git-Prakhar/Foodie' target='_blank'  rel='noreferrer'className="card-btn font-15-400 text-white">Code</a>
              <a href='https://git-prakhar.github.io/Foodie/' target='_blank'  rel='noreferrer'className="card-btn font-15-400 text-white">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
