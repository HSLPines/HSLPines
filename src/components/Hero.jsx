
import image from "/public/image.jpg"
import { motion } from "framer-motion"

const Hero = () => {

  return (
    
    <div id="home" className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>

      <div className='flex flex-col items-center justify-center gap-10 text-white'>

        <motion.div
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duartion: 0.8, delay: 0.2}}
        >
          <img src={image} alt="" className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-lime-900 
          transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600
          md:w-[350px]'/>
        </motion.div>

        <motion.div 
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duartion: 0.8, delay: 0.2}}
        
          className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>

          <h1 className="bg-gradient-to-r from-green-500 to-blue-500 
            bg-clip-text text-transparent text-5xl font-light md:text-7xl">Henrique Lecce</h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-red-500 
            bg-clip-text text-transparent text-2xl md:text-3xl">Programmer</h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>Versatile programmer with strong skills in both front-end and back-end development,
             driven by a passion for data science and cybersecurity. With a creative, solution-oriented approach,
              I enjoy building responsive, user-friendly applications and implementing secure, efficient backend systems.
               My curiosity for new technologies fuels continuous learning, making me adaptable and ready for challenges in various domains of tech. </p>

        </motion.div>

      </div>

    </div>

  )
  
}

export default Hero
