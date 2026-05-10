import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { deepu } from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}

        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>

            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
          >
            I'm a Software Engineer with years of experience in developing
            scalable and user-friendly web applications using Java, Spring Boot,
            Angular, React, MongoDB, JavaScript, and TypeScript. I have
            experience building full-stack applications, REST APIs, and
            real-time systems, with a strong focus on clean architecture,
            performance, and problem-solving. I’m also passionate about learning
            new technologies and creating efficient solutions that solve
            real-world challenges.
          </motion.p>
        </div>

        {/* Right Image */}

        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="relative flex items-center justify-center"
        >
          {/* Background Glow */}

          <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="absolute h-[280px] w-[280px] rounded-full bg-purple-500/20 blur-[100px]" />

          {/* Orbit Rings */}

          <div className="absolute h-[360px] w-[360px] animate-spin rounded-full border border-dashed border-cyan-400/20 [animation-duration:20s]" />

          <div className="absolute h-[430px] w-[430px] animate-spin rounded-full border border-purple-400/10 [animation-duration:35s] [animation-direction:reverse]" />

          {/* Floating Dots */}

          <div className="absolute left-[15%] top-[20%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

          <div className="absolute right-[18%] top-[25%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />

          <div className="absolute bottom-[20%] left-[20%] h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_20px_#ec4899]" />

          {/* Circular Image Design */}

          <div className="group relative">
            {/* Gradient Border */}

            <div className="absolute -inset-[4px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80 blur-md transition-all duration-700 group-hover:opacity-100" />

            {/* Main Circle */}

            <div
              className="
        relative
        flex items-center justify-center
        overflow-hidden
        rounded-full
        border border-white/10
        bg-[#0f172a]/70
        p-3
        backdrop-blur-2xl
      "
            >
              {/* Inner Glow */}

              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10" />

              {/* Profile Image */}

              <img
                src={deepu}
                alt="Deepshikha"
                className="
          relative z-10
          h-[320px]
          w-[320px]
          rounded-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-105
        "
              />

              {/* Overlay */}

              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#050816]/40 to-transparent" />
            </div>

            {/* Floating Badge */}

            <div className="absolute -bottom-5 left-1/2 z-20 w-max -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl">
              <h3 className="text-sm font-bold tracking-[0.25em] text-cyan-300">
                SOFTWARE ENGINEER
              </h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services */}

      <div className="mt-24 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
