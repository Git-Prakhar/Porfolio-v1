import React from 'react';
import HTML from '../images/html logo.png';
import CSS from '../images/css logo.png';
import JS from '../images/js logo.png';
import ReactLogo from '../images/react logo.png';
import Figma from '../images/figma logo.png';
import Sass from '../images/sass logo.png';
import Insta from '../images/instagram logo.png';
import LinkedIn from '../images/linkedIn logo.png';
import Github from '../images/github logo.png';
import Twitter from '../images/twitter logo.png';

export default function Home() {
  return (
    <>
    <div className="section" >
      <div className="df" id='content'>
        <div className="df-col" style={{ gap: '2rem' }} id='left'>
          <div className="text-white" id='name'>
            <div className="font-35-300">I'm <span className="font-35-700 text-red">Prakhar Khandelwal</span></div>
            <div className="font-20-200">Jr. Frontend Developer</div>
          </div>
          <div className="df" id='skills'>
            <img src={HTML} alt="htmlImg" className='img-50 op-60' />
            <img src={CSS} alt="cssImg" className='img-50 op-60' />
            <img src={JS} alt="jsImg" className='img-50 op-60' />
            <img src={ReactLogo} alt="reactImg" className='img-50 op-60' />
            <img src={Figma} alt="figmaImg" className='img-50 op-60' />
            <img src={Sass} alt="sassImg" className='img-50 op-60' />
          </div>
          <div className="df" id='bottom' style={{ gap: '0.688rem' }}>
            <a href='https://docs.google.com/document/d/12ITkVp00ZnDATpYEIn9SUjMoIGD9xgV1s2TUELjW4VM/edit?usp=sharing' target='_blank' rel='noreferrer' className='btn-red-ol font-25-400'>Resume</a>
            <div id="social" className="df" style={{ gap: '0.625rem' }}>
              <a href='https://www.instagram.com/__prakhar.__/' target='_blank' rel='noreferrer'><img src={Insta} alt="" className="img-35 op-70" /></a>
              <a href='https://www.linkedin.com/in/prakhar-khandelwal-8a988528b/' target='_blank' rel='noreferrer'><img src={LinkedIn} alt="" className="img-35 op-70" /></a>
              <a href='https://github.com/Git-Prakhar' target='_blank' rel='noreferrer'><img src={Github} alt="" className="img-35 op-70" /></a>
              <a href='https://twitter.com/____Prakhar__' target='_blank' rel='noreferrer'><img src={Twitter} alt="" className="img-35 op-70" /></a>
            </div>
          </div>
        </div>
        <div className="hp-right">
          <div className="photo"></div>
        </div>
      </div>
    </div>
    </>
  )
}
