import React from 'react'

export default function About() {
  let skill1Count = 0;
  let skill2Count = 0;
  let skill3Count = 0;
  let skill4Count = 0;
  let si1 = null;
  let si2 = null;
  let si3 = null;
  let si4 = null;
  const aboutChange = (code) => {
    let abt = document.querySelectorAll('.aboutParts');
    if (abt[code].classList.contains('noTouch')) return;
    const pos = [-0.625, 7.188, 18.438, 24.563];
    const width = [7.625, 10.813, 5.938, 10.375];
    let roam = document.querySelector('.navbar-bot .navRoam');
    roam.style.left = `${pos[code]}rem`;
    roam.style.width = `${width[code]}rem`;
    if (abt[code].classList.contains('ap-active')) return;
    abt.forEach(element => {
      if (element.classList.contains('ap-active')) {
        element.style.animation = 'fade-out 0.5s forwards';
        element.classList.remove('ap-active');

        setTimeout(() => {
          element.classList.remove('noTouch');
          element.classList.add('dis-off');
        }, 500);
      }
      element.classList.add('noTouch');
      setTimeout(() => {
        element.classList.remove('noTouch');
      }, 500);
    });
    setTimeout(() => {
      abt[code].classList.remove('dis-off');
      abt[code].style.animation = 'fade-in 0.5s forwards';
      abt[code].classList.add('ap-active');
      if (code === 2) {
        let skillCircles = document.querySelectorAll('.skillCircle');
        let skillText = document.querySelectorAll('.skillCircleText');
        si1 = setInterval(() => {
          skill1Count++;
          skillText[0].innerHTML = `${skill1Count}%`;
          skillCircles[0].style.background = `conic-gradient(#8075FF ${360 * skill1Count / 100}deg, #F8F0FB 0deg)`
          if (skill1Count === 90) {
            clearInterval(si1);
          }
        }, 10);
        si2 = setInterval(() => {
          skill2Count++;
          skillText[1].innerHTML = `${skill1Count}%`;
          skillCircles[1].style.background = `conic-gradient(#8075FF ${360 * skill2Count / 100}deg, #F8F0FB 0deg)`
          if (skill2Count === 80) {
            clearInterval(si2);
          }
        }, 10);
        si3 = setInterval(() => {
          skill3Count++;
          skillText[2].innerHTML = `${skill1Count}%`;
          skillCircles[2].style.background = `conic-gradient(#8075FF ${360 * skill3Count / 100}deg, #F8F0FB 0deg)`
          if (skill3Count === 75) {
            clearInterval(si3);
          }
        }, 10);
        si4 = setInterval(() => {
          skill4Count++;
          skillText[3].innerHTML = `${skill1Count}%`;
          skillCircles[3].style.background = `conic-gradient(#8075FF ${360 * skill4Count / 100}deg, #F8F0FB 0deg)`
          if (skill4Count === 70) {
            clearInterval(si4);
          }
        }, 10);
      } else {
        let skillCircles = document.querySelectorAll('.skillCircle');
        let skillText = document.querySelectorAll('.skillCircleText');
        skillCircles.forEach(element => {
          element.style.background = `conic-gradient(#8075FF 3.6deg, #F8F0FB 0deg)`
        });
        skillText.forEach(element => {
          element.innerHTML = '0%';
        });
        clearInterval(si1);
        clearInterval(si2);
        clearInterval(si3);
        clearInterval(si4);
        skill1Count = 0;
        skill2Count = 0;
        skill3Count = 0;
        skill4Count = 0;
      }
    }, 500);
  };
  return (
    <div className="section">
      <div className="df-col text-white aboutParts ai-fs-col ap-active" style={{ gap: '1.438rem' }} id='mySelf'>
        <div className="font-25-400">I'm <span className='font-25-700 text-red'>Prakhar Khandelwal</span><br />I'm a <span className='text-red'>Student Frontend Developer</span> from India</div>
        <div className="font-20-300" id='mySelfCon'>I am an aspiring Full Stack Developer currently focusing on Frontend. I am enthusiastic about gaining hands-on experience in frontend development. With a strong foundation in HTML, CSS, and JavaScript, I am eager to apply my skills to real-world projects and contribute to creating visually appealing and user-friendly websites.</div>
      </div>
      <div className="df-col text-white dis-off aboutParts ai-fs-col" style={{ gap: '0.313rem' }} id='education'>
        <div className="font-25-400">Currently pursuing <span className="font-25-700 text-red">BCA</span> degree <br /><span className="font-25-200 text-blue">Acropolis Institute of Technology And Research, Indore</span></div>
        <div className="font-20-300" style={{ lineHeight: '190%' }}><span className="font-16-200">Started</span> <span className="font-16-500">2023</span> - <span className="font-16-200">Ends</span> <span className="font-16-500">2026</span><br />
          1st Year Student with no experience of real-world projects. <br />
          Thirst of learning and dedication for continuous improvement</div>
      </div>
      <div className="df text-white dis-off aboutParts ai-fs-col" style={{ gap: '1.563rem' }} id='skills'>
        <div className='df-col' id="skill1" style={{ gap: '0.625rem' }}>
          <div className="skillCircle">
            <div className="skillCircleText text-white font-30-400">90%</div>
          </div>
          <div className="font-30-500 text-white op-70">HTML</div>
        </div>
        <div className='df-col' id="skill1" style={{ gap: '0.625rem' }}>
          <div className="skillCircle">
            <div className="skillCircleText text-white font-30-400">80%</div>
          </div>
          <div className="font-30-500 text-white op-70">CSS</div>
        </div><div className='df-col' id="skill1" style={{ gap: '0.625rem' }}>
          <div className="skillCircle">
            <div className="skillCircleText text-white font-30-400">75%</div>
          </div>
          <div className="font-30-500 text-white op-70">JS</div>
        </div><div className='df-col' id="skill1" style={{ gap: '0.625rem' }}>
          <div className="skillCircle">
            <div className="skillCircleText text-white font-30-400">70%</div>
          </div>
          <div className="font-30-500 text-white op-70">React</div>
        </div>
      </div>
      <div className="df text-white dis-off aboutParts ai-fs-col" id='soft-skills'>
        <div className='df-col text-white font-30-400' id="ssleft">
          <span className='op-70'>SASS</span>
          <span className='op-70'>Graphic Design</span>
          <span className='op-70'>Photo Editing</span>
          <span className='op-70'>Vide Editing</span>
          <span className='op-70'>Game Development</span>
        </div>
        <div className='df-col text-white font-30-400' id="ssRight">
          <span className='op-70'>Figma</span>
          <span className='op-70'>Animation</span>
          <span className='op-70'>Blender</span>
          <span className='op-70'>C++</span>
          <span className='op-70'>C#</span>
        </div>
      </div>
      <div className="navbar-bot">
        <div className="navRoam"></div>
        <div className="navbtns" onClick={() => { aboutChange(0) }}>Myself</div>
        <div className="navbtns" onClick={() => { aboutChange(1) }}>Education</div>
        <div className="navbtns" onClick={() => { aboutChange(2) }}>Skills</div>
        <div className="navbtns" onClick={() => { aboutChange(3) }}>Soft Skills</div>
      </div>
    </div>
  )
}
