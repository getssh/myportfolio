import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide, SwiperSlides} from 'swiper/react'
import Sidebar from "../../img/netflixx.png";
import Ecommerce from "../../img/dicegame.png";
import HOC from "../../img/memegene.png";
import QuizApp from "../../img/quizApp.png";
import MoviesApp from "../../img/movis_app.png";
import Recipe from "../../img/recipe.png";
import Travel from "../../img/space_travler.png";
import Budget from "../../img/budget_app.png";
import Crypto from "../../img/cripto_app.png";
import Career from "../../img/career.png"
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const dark = {color: darkMode ? '#fff' : ''}
  return (
    
    <div className="portfolio" id='Porfolio'>
        <span style={dark}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href='https://docs.google.com/presentation/d/1Xt73vp2gMEgImQvX-7eD_yfUApHdhMEJHIwmxxanD28/edit?usp=sharing' target='_blank'>
                    <img src={Career} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Career Boost Slide</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://youtu.be/lCMp--FE5Fc' target='_blank'>
                    <img src={Career} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Career Boost Video</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://davidespinog.github.io/capstone_project_2_API/' target='_blank'>
                    <img src={MoviesApp} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Movies App</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://budget-appp-rp0t.onrender.com/' target='_blank'>
                    <img src={Budget} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Expense Manager</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://space-travelers-qc4o.onrender.com/' target='_blank'>
                    <img src={Travel} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Space Traveler</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://github.com/getssh/recipe_app' target='_blank'>
                    <img src={Recipe} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Recipe App</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://crypto-tracker-app-uclw.onrender.com/' target='_blank'>
                    <img src={Crypto} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Mobile crypto detail</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://dagemtsehay1.github.io/netflix-clone/' target='_blank'>
                    <img src={Sidebar} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Netflix Clone</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://getssh.github.io/dice_game/' target='_blank'>
                    <img src={Ecommerce} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Kids Dice Game</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://getssh.github.io/quiztime/' target='_blank'>
                    <img src={QuizApp} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Quiz App</h3>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://getssh.github.io/meme_generator/' target='_blank'>
                    <img src={HOC} alt="" />
                </a>
                <h3 className='port-discription' style={dark}>Meme Generator</h3>
            </SwiperSlide>
        </Swiper>
        <br />
        <div className="i-left" id="Elevator">
            <div className="i-name">
                <span style={{color : darkMode ? 'white' : ''}}></span>
                <span>Elevator pitch</span>
                <p style={{color : darkMode ? '#aaaaaa' : '', fontSize: '0.8rem'}}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nam enim maxime esse repudiandae doloribus at nihil architecto asperiores dolorum harum nisi accusamus saepe quas, expedita illo atque debitis corporis facilis sequi corrupti laudantium? Repellendus neque eligendi harum ullam, beatae quia molestiae inventore sint aut dolorum, vero distinctio quos amet animi cumque veritatis delectus laborum consequatur excepturi officia, obcaecati modi exercitationem nam. Eveniet quisquam nemo voluptates accusantium necessitatibus eius accusamus quos, vero, facere quibusdam saepe, minus hic asperiores assumenda. Ipsum tempore officia, facere reiciendis dolore mollitia voluptate quaerat at officiis, iure laboriosam voluptatem non ipsa. Aperiam quos quod non ratione aspernatur recusandae nihil debitis laboriosam. In molestias optio minus.
                </p>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default Portfolio