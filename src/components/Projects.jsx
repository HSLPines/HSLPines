
import image1 from '/public/1.jpg';
import image2 from '/public/2.jpg';
import image3 from '/public/3.jpg';
import { motion } from 'framer-motion';

const projectsData = [

  {

    image: image1,
    title: 'EMGods',
    description: 'A dashboard platform providing insights and analyses of EMG (Electromyography) signals captured using an Arduino prototype. Designed for human-machine interaction studies and biofeedback.',
    technologies: ['Java', 'SpringBoot', 'Docker'],

  },
  {

    image: image2,
    title: 'Diet Controller',
    description: 'A web application for tracking dietary goals and personalized recipes, integrating AI for meal recognition and nutritional analysis.',
    technologies: ['React', 'Node', 'PostgreSQL'],

  },
  {

    image: image3,
    title: 'EasyTrash',
    description: 'A sustainable platform for connecting users with recycling points and educating on eco-friendly practices.',
    technologies: ['HTML', 'CSS', 'JavaScript'],

  },
 
];

const ScrollReveal = ({ children }) => {

  return (

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>

  );

};

const ProjectCard = ({ project }) => {

  return (

    <ScrollReveal>

      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] xl:w-[400px]"
        />
        <div className="flex flex-col gap-5">

          <div className="flex flex-col gap-3">

            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>

          </div>
          <div className="flex flex-wrap gap-5">

            {project.technologies.map((tech, index) => (

              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>

            ))}

          </div>

        </div>

      </div>

    </ScrollReveal>

  );

};

const Projects = () => {

  return (

    <div

      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>

        <h1 className="text-4xl font-light text-white md:text-6xl md:text-8xl">
          My Projects
        </h1>

      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

      </div>

    </div>

  );
  
};

export default Projects;
