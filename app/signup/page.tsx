'use client'
import { useState } from "react";
import { SignupForm } from "../components/newcomponents/signupform";

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="border border-[#878787] flex flex-col overflow-hidden  items-stretch text-2xl text-white font-light justify-center px-3 py-[54px] rounded-[32px] border-solid max-md:px-5 w-full max-w-6xl">
        {isLogin ? (
          <div className="flex flex-col shadow-[0px_1px_0px_0px_rgba(255,255,255,0.08)_inset] overflow-hidden relative min-h-[600px] w-full px-20 py-[100px] max-md:max-w-full max-md:px-5 max-md:py-[80px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9e14ec760a13409cba0be5c570ba1763/f790c1b94dc522095aaa378032b082925ce70814?placeholderIfAbsent=true"
              alt="Background"
              className="absolute h-full w-full inset-0"
            />
            <div className="relative text-5xl font-medium mb-4 max-md:max-w-full max-md:text-[40px]">
              Login to Your Account
            </div>
            <div className="relative mb-6">
              Don not have an account?{" "}
              <button
                className="font-normal text-[#E8AF52] hover:underline"
                onClick={toggleForm}
              >
                SIGN UP
              </button>
            </div>
            {/* Login form placeholder - would be implemented in a real application */}
            <div className="relative bg-[rgba(217,217,217,0.18)] w-full max-w-[542px] text-white mt-4 px-6 py-[21px] rounded-xl max-md:px-5">
              Enter your email
            </div>
            <div className="relative bg-[rgba(217,217,217,0.18)] w-full max-w-[542px] text-white mt-5 px-6 py-[21px] rounded-xl max-md:px-5">
              Enter your password
            </div>
            <button className="relative mt-6 rounded border border-[#E8AF52] bg-[rgba(255,255,255,0.02)] gap-2.5 font-normal px-12 py-4 border-solid max-md:px-5 w-full max-w-[542px] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              Login
            </button>
          </div>
        ) : (
          <SignupForm onLoginClick={toggleForm} />
        )}
      </div>
    </main>
  );
};

export default Index;