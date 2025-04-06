import React from "react";

interface CartProgressProps {
  currentStep: number;
}

const CartProgress: React.FC<CartProgressProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Cart" },
    { id: 2, label: "Address" },
    { id: 3, label: "Payment" },
  ];

  return (
    <div className="flex w-[972px] max-w-full items-center gap-5 flex-wrap justify-between mt-[60px] max-md:mt-10">
      <div className="text-white text-2xl font-semibold leading-none tracking-[0.72px] max-md:mt-10">
        Shopping Cart
      </div>
      <div className="flex items-center gap-5 relative w-full justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center text-base whitespace-nowrap text-center uppercase leading-loose">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step.id
                    ? "bg-[rgba(232,175,82,1)] text-black"
                    : "bg-[rgba(217,217,217,1)] text-[rgba(34,80,67,1)]"
                }`}
              >
                {step.id}
              </div>
              <div className="text-white font-normal mt-2">{step.label}</div>
            </div>
            {index < steps.length - 1 && (
              
              <svg width="317" height="1" viewBox="0 0 317 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="317" y2="0.5" stroke={currentStep > step.id ? "#E8AF52" : "#D9D9D9"}/>
              </svg>
              
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="text-white text-2xl font-semibold leading-none tracking-[0.72px] mt-[50px] max-md:mt-10">
        Pricing details
      </div>
    </div>
  );
};

export default CartProgress;