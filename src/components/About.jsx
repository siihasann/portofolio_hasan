import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import MagicButton from './MagicButton'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.25, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-20 h-20 object-contain' />
          <h3 className='text-white text-[15px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = "I am a final-year Information Systems student with a strong passion for software development, particularly in backend engineering and business analysis.";

  const fullText = "I am a final-year Information Systems student with a strong passion for software development, particularly in backend engineering and business analysis. Throughout my studies, I have gained valuable experience in collaborative project development. Additionally, I have deepened my expertise as a Linux system administrator and in cloud environments. During my participation in the MSIB program at Infinite Learning, I successfully earned the global Red Hat System Administrator certification with a top score of 300. I am always eager to learn and grow, and I am open to new opportunities that challenge me and broaden my horizons.";

  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>{isExpanded ? fullText : shortText}</p>

        <button
        onClick={toggleReadMore}
        className='text-gray-300 text-sm mt-2 hover:underline'
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      </motion.div>
      <MagicButton 
          className=' w-[50%] '
          title='Resume'
        />

      <motion.div
        className='mt-10 flex flex-wrap gap-10'
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'about');
