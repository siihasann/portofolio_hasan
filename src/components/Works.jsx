import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import MagicButton from "./MagicButton";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 20,
          scale: 1.05,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform duration-300 ease-in-out hover:scale-105 mb-3'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open
                (source_code_link, '_blank')
              }
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
            >
              <img
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <MagicButton className='mt-6 w-[40%]' title='view' />
        </a>

      </Tilt>

    </motion.div>
  )
}



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Works</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div> 

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          View My Individual and Colaboration Project.         
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, '');