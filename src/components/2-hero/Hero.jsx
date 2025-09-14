import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="about" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="title"
        >
          Front end Developer React JS | Next JS
        </motion.h1>

        <motion.p initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }} className="sub-title">
          Hi, I’m Nour Hany, a Front-End Developer. I create responsive, scalable, and user-friendly web applications focused on clean code, performance and accessibility.  I aim to craft seamless digital experiences. My goal is to solve real-world problems through innovative web solutions.
        </motion.p>

        <button className="btn">
          <a href="https://drive.google.com/file/d/1ZoOCWp36EZYpcWOnGc4OkSaLz5XiOG3q/view" target="blank">Open and Download CV</a>
        </button>

        <div className="all-icons flex">
          <a href="https://github.com/NourHany1" target="blank"  className="icon icon-github"></a>
          <a href="https://www.linkedin.com/in/nour-hany-75657a384/" target="blank" className="icon icon-linkedin"></a>
          <a href="https://wa.me/201124362426" target="blank"  style={{ fontSize: "25px"}} className="icon fa-brands fa-whatsapp">
          </a>
        </div>

      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
