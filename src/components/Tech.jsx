
import { BiLogoBootstrap, BiLogoCPlusPlus, BiLogoCss3, BiLogoDocker, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoMicrosoft, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Tech = () => {

  const variants = {
    hidden: { opacity: 0, y: 50},
    visible: { opacity: 1, y: 0}
  }

  return (

    <div id = "tech" className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'>


      <motion.h1
      variants={variants}
      initial='hidden'
      whileInView="visible"
      transition={{duration: 0.6, delay: 0.2}}
      className='text-4xl font-light text-white md:text-6xl'>Technologies</motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoNodejs className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoReact className='cursor-pointer text-[80px] text-cyan-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoDocker className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoBootstrap className='cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoPostgresql className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoTailwindCss className='cursor-pointer text-[80px] text-cyan-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoSpringBoot className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>
        
      </div>

      <motion.h1
      variants={variants}
      initial='hidden'
      whileInView="visible"
      transition={{duration: 0.6, delay: 0.2}} 
      className='text-4xl font-light text-white md:text-6xl'>Programming Languages</motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoPython className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoJava className='cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoCPlusPlus className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoHtml5 className='cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div
        variants={variants}
        initial='hidden'
        whileInView="visible"
        transition={{duration: 0.6, delay: 0.2}}>
          <BiLogoCss3 className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

      </div>

    </div>

  )

}

export default Tech
