'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const servicesTestimonials = [
    {
      img:
        '/webdesign.jpg',
      role: 'Web Design',
      description: 'I Write well designed, testable, efficient code by using best software development practices. Creating website layout/user interfaces by using standard HTML, CSS, JavaScript, and React.js practices. Integrating data from various back-end services and databases.',
    },
    {
        img:
        '/ui-ux.jpg',
      role: 'UI/UX Design',
      description: 'I am UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards.',
    },
    {
        img:
        '/webdev.jpg',
      role: 'Web Developer',
      description: 'As a Full-Stack Developer with expertise in the MERN stack, I offer end-to-end solutions for building modern web applications.Utilizing HTML, CSS, JavaScript,React.js and Leveraging Node.js, Express.js, and MongoDB, I create intuitive and responsive user interfaces and robust server-side architectures and database solutions.',
    },
    {
        img:
        '/frontend.jpg',
      role: 'Frontend Developer',
      description: 'As a Frontend Developer, I specialize in crafting dynamic and responsive user interfaces using cutting-edge web technologies. I Design and developing high-volume, low-latency applications for mission-critical systems and delivering high-availability and performance. Writing well designed, testable, efficient code',
    },
    {
        img:
        '/backend.jpg',
      role: 'Backend Developer',
      description: 'As a Backend Developer, I specialize in architecting robust and scalable server-side solutions to power applications. With expertise in Node.js and Express.js, I design and implement efficient backend APIs and microservices, ensuring seamless communication between your frontend and backend systems.',
    },
  ];

function Services() {
  return (
    <div id="services" className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Services</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={servicesTestimonials}
                direction="right"
                speed="slow"
             />
            </div>
        </div>
    </div>
  )
}

export default Services