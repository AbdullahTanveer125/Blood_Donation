import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from 'framer-motion'
// import NumberCounter from 'number-counter'
import CountUp from 'react-countup';
const Hero = () => {

  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id='home'>

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '155px' : "238px" }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}

          > </motion.div>
          <span>The best fitness club in town</span>
        </div>

        {/* hero heading */}
        <div className='hero-text' >

          <div>
            <span className='stroke-text'>shape </span>
            <span>your</span>
          </div>

          <div>
            <span>ideal body</span>
          </div>

          <div>
            <span> In here we will help you to shape and build your ideal body and live up your life to fullest </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <CountUp end={140} start={100} delay="4" preFix="+" />    </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span> <CountUp end={978} start={800} delay="4" preFix="+" /> </span>
            <span>members joined</span>
          </div>

          <div>
            <span> <CountUp end={50} start={0} delay="4" preFix="+" /> </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons"><button className="btn">get started</button>
          <button className="btn">learn more</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">join now</button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate">
          <img src={heart} alt="" />
          <span>heart rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}

          src={hero_image_back} alt="" className="hero-image-back" />


        {/* calories */}

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
export default Hero;