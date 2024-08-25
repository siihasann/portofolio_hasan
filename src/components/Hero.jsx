import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm{" "}
            <span className="text-[#915eff]">
              <Typewriter
                words={['Hasan Najib']}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                
              />
              </span>
              
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an Information Systems student at the Faculty of Engineering
            and Informatics
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Social Media Icons */}
      <div className="absolute inset-x-0 bottom-[150px] flex justify-center items-center gap-10">
        <a href="https://github.com/siihasann" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="text-white bg-black rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://linkedin.com/in/hasan-najib-184aa1278" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="text-white bg-black rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://instagram.com/siihasann" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} className="text-white bg-black rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-300" />
        </a>
      </div>

      {/* Scroll Button */}
      <div className="absolute inset-x-0 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
