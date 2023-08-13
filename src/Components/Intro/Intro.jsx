import React from 'react'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/portprofile.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
import './Intro.css'

function Intro() {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color : darkMode ? 'white' : ''}}>BIO</span>
                <span>Getayawkal Tamrat</span>
                <p style={{color : darkMode ? '#aaaaaa' : '', fontSize: '0.8rem'}}>Getayawkal Tamrat is a web developer at a private outsourcing company in Addis Ababa,
Ethiopia. He is passionate about software development and cloud computing, and he is
working towards becoming a full-stack web developer and professional AWS solution
architect.
Getayawkal has a strong foundation in computer science. He completed the ALX software
engineering program, which taught him the fundamentals of software development, including
object-oriented programming, data structures, and algorithms. He also completed the Udacity
Cloud Computing with AWS Nanodegree, which gave him the skills to build and deploy
applications on AWS.
Getayawkal is a highly motivated and self-directed learner. He is always eager to learn new
things and to improve his skills. He is also a team player and he is always willing to help
others.
In his spare time, Getayawkal enjoys playing games and spending time with his family and
friends. He is also an avid reader and he enjoys learning about new technologies.
Getayawkal is a valuable asset to his team and he is a rising star in the field of software
development. He is confident that he will achieve his goals and become a successful
full-stack web developer and AWS solution architect.
                </p>
            </div>
            <Link
            spy={true}
            to='Contact'
            smooth={true}>
            <button className='button i-button'>Hire Me</button>
            </Link>
            <div className="i-icons">
                <a href="https://www.github.com/getssh" target="_blank"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/getayawkal-tamrat" target="_blank"><img src={LinkedIn} alt="" /></a>
                <img src={Instagram} alt="" />
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />

            <motion.div
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            style={{top:'-4%', left:'68%'}}
            className='floating-div float1'
            >
                <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div
            initial={{top: '18rem', left: '9rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}
            style={{top:'18rem', left:'0rem'}}
            className='floating-div'
            >
                <FloatingDiv className='float2' image={thumbup} txt1="Best Design" txt2="Web Apps"/>
            </motion.div>
            <div className='blur' style={{
                background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{
                background: "#c1f5ff",
                top: "17rem",
                width: "21rem",
                height: "11rem",
                left: "-9rem"}}>
            </div>
        </div>
    </div>
  )
}

export default Intro