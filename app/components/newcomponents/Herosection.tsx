import React from "react";
import HeroImage from "./Heroimage";
import HeroContent from "./herocontent";

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-[80%]  ml-[10%] my-5 border border-[color:var(--Button-color,#E8AF52)] shadow-[0px_1px_0px_0px_rgba(255,255,255,0.08)_inset] bg-[rgba(255,255,255,0.02)] flex flex-col justify-center px-2 py-[10px] rounded-2xl border-solid max-md:px-5 max-md:py-[100px]"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-[1287px] mx-auto">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[30%]  ml-16 max-md:w-full max-md:ml-0">
            <HeroImage />
          </div>
          <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;