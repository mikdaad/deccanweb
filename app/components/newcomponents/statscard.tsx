import React from "react";

type StatItemProps = {
  value: string;
  label: string;
};

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="self-stretch my-auto ">
    {value}
    <br />
    <span className="font-light text-base text-[11px]">{label}</span>
  </div>
);

const Divider: React.FC = () => (
  <div className="self-stretch w-0 shrink-0 h-[58px] my-auto border-white border-solid border-2" />
);

const StatsCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l inset-3 p-[2px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30  rounded-[24px]  m-20  max-w-[570px] text-base font-light ">
    <div
      className=" shadow-[0px_1px_0px_0px_rgba(255,255,255,0.08)_inset] inset-1 bg-black max-w-[570px] overflow-hidden pt-[0px] pb-[0px] px-0 rounded-[24px] border-solid"
      aria-label="Price filter card"
    >
    <div className="  max-w-[570px] text-2xl text-white font-normal text-center leading-9   rounded-[24px] backdrop-blur-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0.28%,rgba(0,0,0,0.00)_140.18%)]">
    <div className="flex w-full flex-col items-stretch justify-center px-[37px] py-[46px] rounded-3xl max-md:max-w-full max-md:px-5 ">
      <div className="flex items-center gap-10 justify-center">
        <StatItem value="100k" label="Happy customers" />
        <Divider />
        <StatItem value="1000+" label="Products" />
        <Divider />
        <StatItem value="99%" label="Regular customers" />
      </div>
    </div>
  </div>
  </div>
  </div>
  );
};

export default StatsCard;