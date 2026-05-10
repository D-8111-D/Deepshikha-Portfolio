import {
  SiSpringboot,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiPython,
  SiHtml5,
  SiSass,
} from "react-icons/si";
import {
  FaReact,
  FaAngular,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    size: "col-span-2 row-span-1",
  },
  {
    name: "Angular",
    icon: <FaAngular />,
    size: "col-span-1 row-span-1",
  },
  {
    name: "Java",
    icon: <FaJava />,
    size: "col-span-1 row-span-2",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    size: "col-span-2 row-span-1",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    size: "col-span-1 row-span-1",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    size: "col-span-1 row-span-2",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    size: "col-span-2 row-span-1",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    size: "col-span-1 row-span-1",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    size: "col-span-2 row-span-1",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    size: "col-span-1 row-span-1",
  },
  {
    name: "Python",
    icon: <SiPython />,
    size: "col-span-1 row-span-1",
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
    size: "col-span-1 row-span-2",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    size: "col-span-2 row-span-1",
  },
  {
    name: "Sass",
    icon: <SiSass />,
    size: "col-span-1 row-span-1",
  },
];
const Tech = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-28">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Grid Overlay */}

      <div className="absolute inset-0 " />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}

        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-400">
            TECH STACK
          </p>

          <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Technologies
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Crafting scalable and immersive digital experiences using modern
            frontend and backend technologies.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="mt-24 grid auto-rows-[180px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                ${skill.size}
                group relative overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-3
                hover:border-cyan-400/40
                hover:bg-white/10
                hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]
              `}
            >
              {/* Glow Effect */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>

              {/* Content */}

              <div className="relative z-10 flex h-full flex-col justify-between gap-1 p-8">
                <div className="flex items-start justify-between">
                  <div className="text-6xl text-white transition-all duration-500 group-hover:scale-125 group-hover:text-cyan-400">
                    {skill.icon}
                  </div>

                  <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/40">
                    Technology
                  </p>
                </div>
              </div>

              {/* Animated Border */}

              <div className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-cyan-400/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;

// import React from "react";

// import Tilt from "react-tilt";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className="xs:w-[110px] w-full">
//     <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//       >
//         <div className="w-[110px] h-[130px] flex justify-center items-center m-2  rounded-tl-[30px] rounded-br-[30px] green-pink-gradient">
//           <div className="w-[108px] h-[128px] flex justify-center items-center rounded-tl-[30px] bg-primary rounded-br-[30px]  ">
//             <img
//               src={icon}
//               alt="skill"
//               className="w-[80px] h-[80px] object-contain"
//             />
//           </div>
//         </div>
//         <p className="text-center">{title}</p>
//       </div>
//     </motion.div>
//   </Tilt>
// );
// const Tech = () => {
//   return (
//     <div className="mt-20 flex flex-wrap gap-10">
//       {technologies.map((service, index) => (
//         <ServiceCard key={service.title} index={index} {...service} />
//       ))}
//     </div>
//     // <div className="flex flex-row flex-wrap justify-center gap-10">
//     //   {technologies.map((technology) => (
//     //     <div
//     //       className="flex flex-col justify-center items-center align-center w-28 h-30"
//     //       key={technology.name}
//     //     >
//     //       {/* <BallCanvas icon={technology.icon} /> */}
//     //       {/* <img
//     //         src={technology.icon}
//     //         alt="skill"
//     //         className="min-w-[80px] min-h-[80px] object-contain"
//     //       /> */}

//     //       <div className="w-[110px] h-[130px] flex justify-center items-center m-2  rounded-tl-[30px] rounded-br-[30px] green-pink-gradient">
//     //         <div className="w-[108px] h-[128px] flex justify-center items-center rounded-tl-[30px] bg-primary rounded-br-[30px]  ">
//     //           <img
//     //             src={technology.icon}
//     //             alt="skill"
//     //             className="w-[80px] h-[80px] object-contain"
//     //           />
//     //         </div>
//     //       </div>
//     //       <p className="text-center">{technology.name}</p>
//     //     </div>
//     //   ))}
//     // </div>
//   );
// };

// export default SectionWrapper(Tech, "");
