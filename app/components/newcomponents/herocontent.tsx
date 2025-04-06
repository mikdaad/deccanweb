import React from "react";
import { Button } from "../ui/button";

const HeroContent: React.FC = () => {
  return (
    <div className="flex w-full flex-col self-stretch text-base font-medium my-auto max-md:max-w-full max-md:mt-10">
      <span className="text-[rgba(91,174,151,1)] font-extrabold leading-loose">
        SAVE UP TO 70%
      </span>

      <h1
    id="hero-heading"
    className="text-5xl font-medium leading-none bg-clip-text text-transparent bg-gradient-to-t from-[#E8AF52] to-white mt-[23px] max-md:max-w-full max-md:text-[40px] font-['Blauer_Nue']"
    style={{ fontSize: '36px', fontWeight: '500', lineHeight: '44px', width: '583px' }}
  >
    New Arrival Collection
  </h1>
      <p className="text-[rgba(199,199,199,1)] text-2xl font-extralight self-stretch mt-5 max-md:max-w-full font-['Blauer_Nue']">
        In consequat, quam id sodales hendrerit, eros mi leo, nec lacinia risus
        neque tristique augue.
      </p>


      <Button className="mt-[23px] rounded-[8px] w-[20%] border border-[#E8AF52] bg-[rgba(255, 255, 255, 0.02)]">
  Explore now
</Button>

    </div>
  );
};

export default HeroContent;