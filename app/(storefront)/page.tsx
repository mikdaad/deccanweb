import React from 'react';
import './App.css'; // Make sure this CSS file exists or remove if not needed
import { Banner } from '../components/buildercomponents/home/Banner';
import { Inter } from 'next/font/google'; // Ensure Next.js setup if using next/font
import StatsCard from '../components/newcomponents/statscard';
import HeaderNavigation from "../components/newcomponents/homeheader";
import { Vectorbanner } from '../components/buildercomponents/home/vectorbanner';
import Footer from '../components/newcomponents/footer';
import HeroSection from '../components/newcomponents/Herosection';
import styles from './homestyles.module.css'; // Ensure this CSS module file exists and paths are correct

// Optional: Initialize font if using Next.js Font Optimization
// const inter = Inter({ subsets: ["latin"] });
// If not using Next.js, you'd typically load fonts via CSS imports or <link> tags.

function App() {

  return (
    // Using React Fragment <>...</> is fine here
    <>
      {/* Removed the outer redundant relative flex flex-col div */}

      {/* Section 1: Top Hero Area with Gradient Background */}
      <div style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url("/background.png") lightgray 50% / cover no-repeat'
      }} className='relative  z-0'> {/* Changed z-10 to z-0, header will be above */}

        

        {/* NEW: Clipping Container for Ellipses and Content */}
        <div className='relative overflow-hidden'> {/* Key additions: relative and overflow-hidden */}

          {/* Sticky Header */}
        <header className="sticky top-0 w-full h-16 bg-transparent shadow-md my-4 z-20"> {/* z-20 to be above everything */}
          <HeaderNavigation />
        </header>

          {/* Background Ellipses - Placed first, low z-index */}
          {/* These are now direct children of the clipping container */}
          <div className={`${styles.Ellipse_2_176_209} absolute z-0 right-3/4 top-0 overflow-hidden pointer-events-none`}></div> {/* Adjusted position slightly, added pointer-events-none */}
          <div className={`${styles.Ellipse_2_176_210} absolute z-0 bottom-1/4 left-3/4 overflow-hidden pointer-events-none`}></div> {/* Adjusted position slightly, added pointer-events-none */}
          {/* NOTE: Adjusted ellipse positions (top-0, bottom-1/4) as examples, fine-tune based on desired visual placement relative to the clipping container */}


          {/* Content Row 1: Main Text and SVG */}
          {/* Added relative and z-10 to ensure this content is above the z-0 ellipses */}
          <div className='flex flex-row justify-between relative z-10'>

            {/* Left Side: Text Content */}
            <div className='flex flex-col ml-24 mt-8 mb-8'> {/* Added mb-8 for spacing */}
              <span className={`${styles.YourMostModernHomeWithOurProducts_176_223} font-serena`}>
                YOUR MOST MODERN HOME WITH OUR PRODUCTS
              </span>
              <p className="text-[rgba(255,255,255,0.70)] font-[Inter] text-[20px] font-thin leading-[150.07%] whitespace-pre-line max-w-[40%] mt-4">
                Discover the artistry of luxury carpets and
                exquisite home décor, crafted to bring
                sophistication and warmth to your home
              </p>
            </div>

            {/* Right Side: SVG Element */}
            {/* Positioned absolutely relative to the parent row (flex flex-row...) */}
            {/* z-10 ensures it's above ellipses, sibling to text block */}
            <div className={`${styles.Group_5369_176_226} absolute right-2 top-0 mt-8 mr-4 z-10`}> {/* Adjusted positioning slightly (top-0, mt-8, mr-4) */}
              <svg width="105" height="333" viewBox="0 0 117 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-54" y="-54" width="225" height="461">
                  <div style={{ "backdropFilter": "blur(27px)", "clipPath": "url(#bgblur_0_176_226_clip_path)", "height": "100%", "width": "100%" }}></div>
                </foreignObject>
                <rect data-figma-bg-blur-radius="54" width="117" height="353" rx="24" fill="url(#paint0_linear_176_226)" fillOpacity="0.1" />
                {/* Simplified paths for brevity - include your full SVG paths here */}
                <path d="M59.0438 72V60.1595H64.0786L64.827 55.5235H59.0438V52.5706C59.0438 51.2328 59.5136 50.3169 61.9336 50.3169H65V46.1837C63.508 46.0569 62.0083 45.9956 60.5078 46.0002C56.0575 46.0002 53.002 48.1557 53.002 52.1126V55.5149H48V60.1508H53.013V72H59.0438Z" fill="white" fillOpacity="0.53" />
                <path d="M70.706 291.19C69.871 291.56 68.974 291.81 68.031 291.923C69.004 291.34 69.7319 290.424 70.079 289.345C69.1648 289.888 68.1643 290.27 67.121 290.475C66.4194 289.725 65.4901 289.229 64.4773 289.062C63.4646 288.895 62.4251 289.067 61.5202 289.552C60.6154 290.036 59.8958 290.806 59.4732 291.741C59.0505 292.677 58.9485 293.725 59.183 294.725C57.3307 294.632 55.5186 294.15 53.8644 293.311C52.2102 292.473 50.7508 291.296 49.581 289.857C49.181 290.547 48.951 291.347 48.951 292.199C48.9506 292.966 49.1394 293.721 49.5009 294.397C49.8623 295.074 50.3852 295.651 51.023 296.077C50.2833 296.053 49.5599 295.853 48.913 295.494V295.554C48.9129 296.629 49.285 297.672 49.9662 298.505C50.6473 299.337 51.5956 299.908 52.65 300.122C51.9638 300.307 51.2443 300.335 50.546 300.202C50.8435 301.127 51.423 301.937 52.2034 302.516C52.9837 303.096 53.9259 303.418 54.898 303.436C53.2478 304.731 51.2099 305.434 49.112 305.431C48.7404 305.431 48.3691 305.409 48 305.366C50.1295 306.735 52.6083 307.461 55.14 307.459C63.71 307.459 68.395 300.361 68.395 294.205C68.395 294.005 68.39 293.803 68.381 293.603C69.2923 292.943 70.0789 292.127 70.704 291.193L70.706 291.19Z" fill="white" fillOpacity="0.68" />
                <path d="M63.017 169H54.947C53.3702 169.002 51.8584 169.629 50.7435 170.744C49.6286 171.859 49.0016 173.371 49 174.948V183.018C49.0019 184.595 49.6291 186.107 50.7442 187.221C51.8593 188.336 53.3712 188.963 54.948 188.965H63.018C64.5948 188.963 66.1066 188.336 67.2215 187.221C68.3364 186.106 68.9634 184.594 68.965 183.017V174.947C68.9631 173.37 68.3359 171.858 67.2208 170.744C66.1057 169.629 64.5938 169.002 63.017 169V169ZM66.957 183.017C66.957 183.534 66.8551 184.047 66.6571 184.525C66.4591 185.003 66.1689 185.437 65.803 185.803C65.4371 186.169 65.0028 186.459 64.5248 186.657C64.0468 186.855 63.5344 186.957 63.017 186.957H54.947C53.9022 186.957 52.9003 186.542 52.1616 185.803C51.423 185.064 51.008 184.062 51.008 183.017V174.947C51.0083 173.902 51.4235 172.9 52.1624 172.162C52.9012 171.423 53.9032 171.008 54.948 171.008H63.018C64.0628 171.008 65.0647 171.423 65.8034 172.162C66.542 172.901 66.957 173.903 66.957 174.948V183.018V183.017Z" fill="#F9F9F9" fillOpacity="0.62" />
                <path d="M58.9818 173.819C57.6133 173.821 56.3014 174.366 55.3337 175.334C54.3661 176.301 53.8217 177.613 53.8198 178.982C53.8214 180.351 54.3658 181.663 55.3337 182.631C56.3016 183.599 57.6139 184.144 58.9828 184.146C60.3519 184.144 61.6645 183.6 62.6326 182.632C63.6007 181.664 64.1452 180.351 64.1468 178.982C64.1447 177.613 63.5998 176.301 62.6315 175.333C61.6633 174.365 60.3507 173.821 58.9818 173.82V173.819ZM58.9818 182.138C58.1451 182.138 57.3426 181.806 56.7509 181.214C56.1592 180.622 55.8268 179.82 55.8268 178.983C55.8268 178.146 56.1592 177.344 56.7509 176.752C57.3426 176.16 58.1451 175.828 58.9818 175.828C59.8186 175.828 60.6211 176.16 61.2127 176.752C61.8044 177.344 62.1368 178.146 62.1368 178.983C62.1368 179.82 61.8044 180.622 61.2127 181.214C60.6211 181.806 59.8186 182.138 58.9818 182.138Z" fill="#F9F9F9" fillOpacity="0.62" />
                <path d="M64.1559 175.095C64.8391 175.095 65.3929 174.541 65.3929 173.858C65.3929 173.175 64.8391 172.621 64.1559 172.621C63.4728 172.621 62.9189 173.175 62.9189 173.858C62.9189 174.541 63.4728 175.095 64.1559 175.095Z" fill="#F9F9F9" fillOpacity="0.62" />
                <defs>
                  <clipPath id="bgblur_0_176_226_clip_path"> {/* Removed transform for simplicity if not needed */}
                    <rect width="117" height="353" rx="24" />
                  </clipPath>
                  <linearGradient id="paint0_linear_176_226" x1="58.5" y1="-8.39615e-08" x2="50" y2="496.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Content Row 2: View Products Button and Stats Card */}
          {/* Added relative and z-10 to ensure this content is also above the z-0 ellipses */}
          <div className='flex flex-row justify-between items-center relative z-10 px-24 py-8'> {/* Added padding, items-center */}

            {/* Left Side: View Products Button */}
            <div className={`${styles.Frame_5408_176_206}`}>
              <span className={styles.ViewProducts_176_207}>View Products</span>
              {/* Assuming Frame_5408... and ViewProducts... provide button styling */}
            </div>

            {/* Right Side: Stats Card Component */}
            <StatsCard />

          </div>

        </div> {/* End of Clipping Container */}
      </div> {/* End of Section 1 */}


      {/* Section 2: Banners, Image Rows, Hero Section, Footer */}
      {/* This content is outside the clipping container and will not have the ellipses behind it */}
      <div>
        <Banner />
        <Vectorbanner />

        {/* Image Row 1 */}
        <div className='flex flex-row justify-around my-10 items-center px-4'> {/* Added items-center, padding */}
          <div className="relative max-w-[589px] min-h-[365px] rounded-[12px] overflow-hidden flex-shrink-0"> {/* Added flex-shrink-0 */}
            <div className="bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l rounded-[12px] p-[2px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30">
              <div className='bg-black p-1 rounded-[10px]'> {/* Inner rounding */}
                <img src="/banner/b5.png" alt="Heritage Image 1" className="w-full h-full object-cover rounded-[9px]" /> {/* Match inner rounding */}
              </div>
            </div>
          </div>
          <div className='flex flex-col max-w-[45%] ml-8'> {/* Adjusted max-width, added margin */}
            <span className={styles.ExperienceThePerfectBlendOfHeritage_176_357}>Experience the Perfect Blend of Heritage</span>
            <span className={styles.ExperienceThePerfectFusionOfTraditionAndModernityWithTheUsAddATouchOfOpulenceToYourHomeAndLetYourDécorTellAStoryOfEleganceYourHomeAndLetYourDécorTellAStoryOfEleganceYourHomeAndLetYourDécorTellAStoryOfElegance_176_358}>
              Experience the perfect fusion of tradition and modernity with the us. Add a touch of opulence to your home and let your décor tell a story of elegance. your home and let your décor tell a story of elegance.your home and let your décor tell a story of elegance.
            </span>
          </div>
        </div>

        {/* Image Row 2 */}
        <div className='flex flex-row justify-around my-10 items-center px-4'> {/* Added items-center, padding */}
           <div className='flex flex-col max-w-[45%] mr-8'> {/* Adjusted max-width, added margin */}
            <span className={styles.ExperienceThePerfectBlendOfHeritage_176_357}>Experience the Perfect Blend of Heritage</span>
            <span className={styles.ExperienceThePerfectFusionOfTraditionAndModernityWithTheUsAddATouchOfOpulenceToYourHomeAndLetYourDécorTellAStoryOfEleganceYourHomeAndLetYourDécorTellAStoryOfEleganceYourHomeAndLetYourDécorTellAStoryOfElegance_176_358}>
              Experience the perfect fusion of tradition and modernity with the us. Add a touch of opulence to your home and let your décor tell a story of elegance. your home and let your décor tell a story of elegance.your home and let your décor tell a story of elegance.
            </span>
          </div>
           <div className="relative max-w-[589px] min-h-[365px] rounded-[12px] overflow-hidden flex-shrink-0"> {/* Added flex-shrink-0 */}
            <div className="bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l rounded-[12px] p-[2px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30">
              <div className='bg-black p-1 rounded-[10px]'> {/* Inner rounding */}
                <img src="/banner/b6.png" alt="Heritage Image 2" className="w-full h-full object-cover rounded-[9px]" /> {/* Match inner rounding */}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section with another Ellipse */}
        <div className='relative'> {/* This parent needs to be relative for the absolute ellipse inside */}
          <HeroSection />
          {/* This ellipse is positioned relative to the HeroSection container */}
          <div className={`${styles.Ellipse_13_176_203} absolute top-0 left-56 z-0 pointer-events-none`}></div> {/* Ensure z-0 if HeroSection content should be above */}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;