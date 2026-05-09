import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="flex flex-col justify-center items-center align-center w-28 h-30"
          key={technology.name}
        >
          {/* <BallCanvas icon={technology.icon} /> */}
          {/* <img
            src={technology.icon}
            alt="skill"
            className="min-w-[80px] min-h-[80px] object-contain"
          /> */}

          <div
            className="w-[110px] h-[130px] flex justify-center items-center m-2  rounded-tl-[30px] rounded-br-[30px] green-pink-gradient
            animate-spinY"
          >
            <div className="w-[108px] h-[128px] flex justify-center items-center rounded-tl-[30px] bg-primary rounded-br-[30px]  ">
              <img
                src={technology.icon}
                alt="skill"
                className="w-[80px] h-[80px] object-contain"
              />
            </div>
          </div>
          <p className="text-center">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
