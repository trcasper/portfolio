import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Pic from "./img/Pic.jpg";
import CodeLogos from './img/CodeLogos.png';
import MyBandPic from './img/MyBandPic.jpg';
import Backpacking from './img/Backpacking.jpg';
import Tiger from './img/Tiger.jpg';
import LoopOne from './img/LoopOne.png'
import LoopTwo from './img/LoopTwo.png'
import LoopThree from './img/LoopThree.png'
import LoopFour from './img/LoopFour.png'
import Linked from './img/Linked.png';
import GitHub from './img/GitHub.png';

function App() {
  return (
    <div className="App">
      <div id="Intro">
        <div className="IntroText">
          My name is
          <span class="Highlight"> Travis R Casper</span>.<br />I am a Full-Stack
          Developer.
        </div>
        <div className="ScrollContainer">
          <button id="IntroBtn"><a href="#ProjectsScroll">View Work</a></button>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div className="Nav">
        <div className="HomeLink"><a href="#Intro">Home</a></div>
        <div id="AboutLink"><a href="#About">About</a></div>
        <div id="SkillsLink"><a href="#SkillsScroll">Skills</a></div>
        <div id="ProjectLink"><a href="#ProjectsScroll">Projects</a></div>
        <div id="ContactLink"><a href="#Contact">Contact</a></div>
      </div>

      <div id="About">
        <div className="AboutTitle">About</div>
      <div className="AboutDescription">
        My Name is Travis Casper.  I am passionate about developing web applications of all kinds.  I love the challenge and the creativity involved in web design, and since beginning this journey I have fully immersed myself and found myself striving to learn and expand my skills on a daily basis.  I also a strong background in Solar CAD Design as well as sales/marketing.
        <br/><br/>
        -Full Skills List Below
        <br/><br/>
        Interesting Facts About Me:<br/>
        - I Play in a Pop-Punk band called Alpine Loop<br/>
        - I have backpacked with my wife all over the world

      </div>
      <div className="MyPicsContainer">
        <div className="BandPicBox">
        <img className="BandPic" src={MyBandPic} alt="BandPicAlt" />
        </div>
        <div className="BackpackingPicBox">
          <img className="BackpackingPic" src={Backpacking} alt="BackpackingPicAlt" />
        </div>
        <div className="PicContainer">
          <img className="Pic" src={Pic} alt="MePic" />
        </div>
        <div className="TigerPicBox">
          <img className="TigerPic" src={Tiger} alt="TigerPicAlt"/>
        </div>
        
      </div>
      </div>
      <div id="SkillsScroll"></div>
      <div id="Skills">
        <div className="SkillsTitle">Skills</div>
        <div className="SkillsContainer">
          <div className="CodePicsContainer"> 
          <img className="CodeLogos" src={CodeLogos} alt="CodePicAlt" />
          </div> 
          <div className="SkillsList">
            - JavaScript ES6<br/>
            - HTML5<br/>
            - CSS3<br/>
            - React<br/>
            - Node JS<br/>
            - Git<br/>
            - Redux<br/>
            - Massiv<br/>
            - Sessions<br/>
            - Postgres<br/>
            - CAD/PV Design
          </div>
        </div>
      </div>
      <div id="ProjectsScroll"></div>
      <div id="Projects">
        <div className="ProjectsTitle">Projects</div>
        <div className="BandProject">
        <div className="BandProjectTitle">Alpine Loop Website</div>
        <div className="BandSlides">
          <img className="Slides" src={LoopOne} alt="LoopOneAlt" />
          {/* <img className="Slides" src={LoopTwo} alt="LoopTwoAlt" />
          <img className="Slides" src={LoopThree} alt="LoopThreeAlt" />
          <img className="Slides" src={LoopFour} alt="LoopFourAlt" /> */}
        </div>
        {/* </div>
        <div className="ArtistryProject">
          <div className="ArtistryProjectTitle">Artistry Website</div>
          <div className="ArtistrySlides">
            
            </div>  */}
        </div>

      </div>
      <div id="Contact">
      <div className="ContactTitle">Contact</div>
      <div className="ContactText">Have a question or want to work together?
      </div>
      <div className="ContactList">Travis R Casper<br/>
      Phone# - 801.336.8247<br/>
      Email - trcasper90@gmail.com<br/>
      </div>
      <div className="LinkBox">
      <a
                href="https://www.linkedin.com/in/travis-casper/"
                target="_blank"
              >
                <img className="LinkedPic" src={Linked} alt="LinkedPicAlt" />
              </a>
      </div>
      <div className="GitBox">
      <a
                href="https://github.com/trcasper"
                target="_blank"
              >
                <img className="GitPic" src={GitHub} alt="GitPicAlt" />
              </a>
      </div>
      </div>
    </div>
  );
}

export default App;
