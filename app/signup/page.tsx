'use client';
import { useState } from 'react';
import { SignupForm } from '../components/newcomponents/signupform'; // Adjust path if needed
import Image from 'next/image'; // Using next/image for optimization

// Placeholder Icons (Replace with actual SVGs or an icon library like react-icons)
const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.32 17.79V6.21C5.32 6.21 5.32 6.48 5.32 6.48L5.32 6.48L11.92 12L5.32 17.52V17.79Z" fill="#FBBB00"/>
      <path d="M17.08 9.76H11.91L11.92 12L17.08 12C17.08 12 18.1 12 18.37 12.3C18.64 12.61 18.58 14.08 17.68 14.95C16.78 15.82 14.8 16.2 11.92 16.2C9.03999 16.2 6.61999 14.26 5.32 11.99L5.32 12L5.32 12.01C6.61999 9.74 9.03999 7.8 11.92 7.8C13.96 7.8 15.76 8.58 17.08 9.76Z" fill="#518EF8"/>
      <path d="M5.32 17.52L11.92 12L14.8 9.67L11.92 7.8C9.03999 7.8 6.61999 9.74 5.32 12.01L5.32 17.52Z" fill="#28B446"/>
      <path d="M18.32 4.32001C16.49 2.78001 14.3 1.80001 11.92 1.80001C7.4 1.80001 3.43 4.89001 1.34 8.89001L5.32 12.01C6.61999 9.74001 9.03999 7.80001 11.92 7.80001C13.96 7.80001 15.76 8.58001 17.08 9.76001L18.32 8.68001V4.32001Z" fill="#F14336"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#1778F2"/>
    <path d="M16.9659 12.4688H13.703V21H9.4116V12.4688H6V8.78125H9.4116V6.375C9.4116 3.51937 10.926 2 14.1627 2L17.25 2.00875V5.4375H15.1884C13.8311 5.4375 13.7088 6.045 13.7088 7.03125L13.703 8.78125H17.25L16.9659 12.4688Z" fill="#FDFDFD"/>
  </svg>
);


const Index = () => {
  const [isLogin, setIsLogin] = useState(false); // Start with Signup form

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Shared input styling
  const inputClasses = "w-full bg-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 text-lg font-light focus:outline-none focus:ring-1 focus:ring-yellow-500/50";
  // Shared button styling
  const buttonPrimaryClasses = "w-full px-12 py-4 bg-transparent rounded border border-[#E8AF52] text-white text-lg font-normal hover:bg-yellow-500/10 transition-colors duration-200 flex items-center justify-center gap-2.5";
  const buttonSecondaryClasses = "w-full px-6 py-4 bg-white/10 rounded-xl text-white text-lg font-normal hover:bg-white/20 transition-colors duration-200 flex items-center justify-center gap-2.5";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#101318] to-[#1a1c21] p-20 md:p-6">
      {/* Outer Border Container */}
      <div className="w-full max-w-7xl border border-[#868686] rounded-[32px] lg:p-12">
        {/* Inner Content Container */}
        <div className="relative flex flex-col overflow-hidden items-stretch bg-black/30 text-white font-light rounded-2xl border border-[#E8AF52]/40 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.08)] min-h-[80vh] md:min-h-[914px]">
          {/* Optional Background Glow */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#F9BF00_0%,_rgba(252,_232,_3,_0)_70%)] blur-3xl pointer-events-none"></div>

          {/* Main Content Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 flex-grow">

            {/* Left Side: Image (Hidden on small screens) */}
            <div className="hidden md:flex items-center justify-center p-8 lg:p-12">
               {/* Ensure the image fills its container */}
              <div className="relative w-full h-full max-h-[818px] aspect-[675/818] rounded-xl overflow-hidden">
                 {/* Using placeholder, replace src with your actual image URL */}
                <Image
                  // Use a real image source
                  src="/signup.png"
                  alt="Abstract background"
                  layout="fill"
                  objectFit="cover"
                  priority // Load image faster if it's above the fold
                />
              </div>
            </div>

            {/* Right Side: Form Area */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-20">
              {isLogin ? (
                // --- LOGIN FORM ---
                <div className="w-full max-w-md mx-auto space-y-6">
                  <h1 className="text-4xl md:text-5xl font-medium text-center md:text-left">
                    Login to Your Account
                  </h1>
                  <p className="text-xl md:text-2xl font-light text-center md:text-left">
                    Don't have an account?{' '}
                    <button
                      className="font-normal text-[#E8AF52] hover:underline"
                      onClick={toggleForm}
                      type="button"
                    >
                      SIGN UP
                    </button>
                  </p>
                  {/* Actual Login Form */}
                  <form className="space-y-5">
                    <input
                       type="email"
                       placeholder="Enter your email"
                       className={inputClasses}
                       aria-label="Email"
                    />
                    <input
                       type="password"
                       placeholder="Enter your password"
                       className={inputClasses}
                       aria-label="Password"
                    />
                    <button type="submit" className={buttonPrimaryClasses}>
                      Login
                    </button>
                  </form>
                   {/* Social Login Options (Optional for Login) */}
                   <div className="relative mt-8">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-white/30"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-[#1a1c21] px-4 text-lg text-white/80">
                        Or login with
                        </span>
                    </div>
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                     <button type="button" className={buttonSecondaryClasses}>
                     <img
          src="https://cdn.builder.io/api/v1/image/assets/9e14ec760a13409cba0be5c570ba1763/0a7d486de0f4f68a565560c72deb8f6c3cd9f2a7?placeholderIfAbsent=true"
          alt="Google"
          className="aspect-[1] object-contain w-6 shrink-0"
        />
       
                       <span>Google</span>
                     </button>
                     <button type="button" className={buttonSecondaryClasses}>
                       <FacebookIcon />
                       <span>Facebook</span>
                     </button>
                   </div>
                </div>
              ) : (
                // --- SIGNUP FORM ---
                <SignupForm onLoginClick={toggleForm} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;