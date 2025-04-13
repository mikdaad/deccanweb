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
import Link from 'next/link';
import SocialIconsBar from '../components/newcomponents/socialicons';
import { InfiniteSlider } from '../components/ui/infiniteslider';

// Optional: Initialize font if using Next.js Font Optimization
// const inter = Inter({ subsets: ["latin"] });
// If not using Next.js, you'd typically load fonts via CSS imports or <link> tags.

function App() {

  return (
    // Using React Fragment <>...</> is fine here
    <>
      {/* Removed the outer redundant relative flex flex-col div */}

      <div
  className="relative z-0 bg-no-repeat bg-center bg-cover sm:bg-[length:100%_100%] bg-[length:auto_100%] min-h-screen"
  style={{
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url("/background.png")',
  }}
> {/* Changed z-10 to z-0, header will be above */}

        

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
          <div className="flex flex-col-reverse md:flex-row justify-between relative z-10 px-4 md:px-24">


            {/* Left Side: Text Content */}
            <div className='flex flex-col ml-4 lg:ml-24 mt-8 mb-8'> {/* Added mb-8 for spacing */}
           
           
           <div className='flex flex-row '>
            <div className='flex flex-col'><span className="
  inline-block  w-[240px] lg:w-[640px]  mt-[30px] font-['Serena'] text-[25px]  lg:text-[44px]  not-italic  font-normal leading-[121.6%] bg-gradient-to-t  from-white
  to-[#e8af52]
  bg-clip-text     text-transparent  whitespace-normal overflow-visible      break-words           ">
  Your Most Modern Home With Our Products
</span>
              <p className="hidden lg:block text-[rgba(255,255,255,0.70)] font-[Inter] text-[16px] md:text-[20px] font-thin leading-[150.07%] whitespace-pre-line max-w-full md:max-w-[40%] mt-4">

                Discover the artistry of luxury carpets and
                exquisite home décor, crafted to bring
                sophistication and warmth to your home
              </p>

              <p className="block lg:hidden text-[rgba(255,255,255,0.70)] font-[Inter] text-[16px] md:text-[20px] font-thin leading-[150.07%] whitespace-pre-line w-[200px] lg:max-w-full md:max-w-[40%] mt-4">

Discover the artistry of luxury carpets and
exquisite home décor, crafted to bring
sophistication and warmth to your home
</p>
</div> 
<SocialIconsBar
         iconClassName="w-[85px] h-[233px] mt-8 lg:mt-0 lg:w-[105px] lg:h-[333px]"
      /> </div>
<div className='block lg:hidden mr-6'><StatsCard /></div>\


            </div>







         




          </div>

          {/* Content Row 2: View Products Button and Stats Card */}
          {/* Added relative and z-10 to ensure this content is also above the z-0 ellipses */}
          <div className='flex flex-row justify-between items-center relative z-10 px-24 pb-40'> {/* Added padding, items-center */}

            {/* Left Side: View Products Button */}
            

            <div className="
  inline-flex           items-center          justify-center        gap-2.5            py-2   lg:py-4           px-4       lg:px-8                mt-0 lg:mt-5                  lg:max-h-max             rounded-xl            bg-[#e8af52]          shadow-[0_4px_32px_#e8af5299] ">
 
 <Link href="/shop"> <span className=" inline-block      text-black        text-center       font-blauer-nue     text-xl  lg:text-2xl          font-normal       leading-normal    ">
  View Products
</span></Link>
  </div>

            {/* Right Side: Stats Card Component */}
            <div className='hidden lg:block'><StatsCard /></div>

          </div>

        </div> {/* End of Clipping Container */}
      </div> {/* End of Section 1 */}


      {/* Section 2: Banners, Image Rows, Hero Section, Footer */}
      {/* This content is outside the clipping container and will not have the ellipses behind it */}
      <div>
        <Banner />
        <InfiniteSlider gap={24} reverse>  <Vectorbanner /> </InfiniteSlider>

   

    {/* --- Responsive Image Row 2 (Text Left / Image Right on Desktop) --- */}
    {/* This single block handles both mobile and desktop layouts */}
    <div className='
      flex flex-col items-center          /* Mobile: Vertical stack, centered */
      gap-6 my-6 px-4                   /* Mobile: Spacing */
      lg:flex-row lg:justify-around       /* Desktop: Horizontal row, spaced out */
      lg:items-center lg:gap-0 lg:my-10  /* Desktop: Alignment & spacing */
    '>

{/* Image Block - Responsive Size & Order */}
<div className="
        relative w-full max-w-md        /* Mobile: Full width up to medium */
        min-h-[250px] rounded-[12px] overflow-hidden
        lg:w-auto lg:max-w-[589px]      /* Desktop: Auto width up to specific max */
        lg:min-h-[365px] lg:flex-shrink-0 /* Desktop: Height & prevent shrinking */
        lg:order-last                    /* Desktop: Ensure image block appears last */
      ">
        {/* Gradient border structure */}
        <div className="bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l rounded-[12px] p-[2px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30">
          <div className='bg-black p-1 rounded-[10px]'>
            <img
              // NOTE: You had b5.png in the mobile example and b6.png in the desktop for Row 2.
              // Make sure to use the correct image source for the row you intend. Let's assume b6.png is correct for Row 2.
              src="/banner/b5.png"
              alt="Heritage Image 2"
              className="w-full h-full object-cover rounded-[9px] min-h-[240px] lg:min-h-[355px]"
            />
          </div>
        </div>
      </div>


      {/* Text Block */}
      {/* Controls width, alignment, and order based on screen size */}
      <div className='
        flex flex-col w-full max-w-md     /* Mobile: Full width up to medium, centered content */
        items-center text-center
        lg:max-w-[45%] lg:items-start     /* Desktop: Takes 45% width, align items left */
        lg:text-left lg:mr-8             /* Desktop: Align text left, add right margin */
        lg:order-first                   /* Desktop: Ensure text block appears first */
      '>

        {/* Title Span - Responsive Font & Wrapping */}
        <span className="
          block break-words             /* Handles wrapping */
          font-blauer-nue             /* Custom font (ensure configured) */
          text-2xl leading-tight        /* Mobile text size */
          lg:text-4xl lg:leading-[44px] /* Desktop text size */
          not-italic font-medium
          text-transparent bg-clip-text /* Gradient text effect */
          bg-gradient-to-t from-white to-[#e8af52]
          w-full mb-2                   /* Use parent width, margin bottom */
        ">
          Experience the Perfect Blend of Heritage
        </span>

        {/* Body Text Span - Responsive Font & Wrapping */}
        <span className="
          block break-words             /* Handles wrapping */
          font-blauer-nue             /* Custom font (ensure configured) */
          text-sm leading-6             /* Mobile text size */
          lg:text-base lg:leading-6     /* Desktop text size */
          font-normal
          text-transparent bg-clip-text /* Gradient text effect */
          bg-gradient-to-r from-[#e8af52] to-[#ffffffe0] /* Different gradient */
          w-full                        /* Use parent width */
        ">
          Experience the perfect fusion of tradition and modernity with the us. Add a touch of opulence to your home and let your décor tell a story of elegance. your home and let your décor tell a story of elegance.your home and let your décor tell a story of elegance.
        </span>
      </div>

      
    </div>




    {/* --- Responsive Image Row 2 (Text Left / Image Right on Desktop) --- */}
    {/* This single block handles both mobile and desktop layouts */}
    <div className='
      flex flex-col items-center          /* Mobile: Vertical stack, centered */
      gap-6 my-6 px-4                   /* Mobile: Spacing */
      lg:flex-row lg:justify-around       /* Desktop: Horizontal row, spaced out */
      lg:items-center lg:gap-0 lg:my-10  /* Desktop: Alignment & spacing */
    '>

      {/* Text Block */}
      {/* Controls width, alignment, and order based on screen size */}
      <div className='
        flex flex-col w-full max-w-md     /* Mobile: Full width up to medium, centered content */
        items-center text-center
        lg:max-w-[45%] lg:items-start     /* Desktop: Takes 45% width, align items left */
        lg:text-left lg:mr-8             /* Desktop: Align text left, add right margin */
        lg:order-first                   /* Desktop: Ensure text block appears first */
      '>

        {/* Title Span - Responsive Font & Wrapping */}
        <span className="
          block break-words             /* Handles wrapping */
          font-blauer-nue             /* Custom font (ensure configured) */
          text-2xl leading-tight        /* Mobile text size */
          lg:text-4xl lg:leading-[44px] /* Desktop text size */
          not-italic font-medium
          text-transparent bg-clip-text /* Gradient text effect */
          bg-gradient-to-t from-white to-[#e8af52]
          w-full mb-2                   /* Use parent width, margin bottom */
        ">
          Experience the Perfect Blend of Heritage
        </span>

        {/* Body Text Span - Responsive Font & Wrapping */}
        <span className="
          block break-words             /* Handles wrapping */
          font-blauer-nue             /* Custom font (ensure configured) */
          text-sm leading-6             /* Mobile text size */
          lg:text-base lg:leading-6     /* Desktop text size */
          font-normal
          text-transparent bg-clip-text /* Gradient text effect */
          bg-gradient-to-r from-[#e8af52] to-[#ffffffe0] /* Different gradient */
          w-full                        /* Use parent width */
        ">
          Experience the perfect fusion of tradition and modernity with the us. Add a touch of opulence to your home and let your décor tell a story of elegance. your home and let your décor tell a story of elegance.your home and let your décor tell a story of elegance.
        </span>
      </div>

      {/* Image Block - Responsive Size & Order */}
      <div className="
        relative w-full max-w-md        /* Mobile: Full width up to medium */
        min-h-[250px] rounded-[12px] overflow-hidden
        lg:w-auto lg:max-w-[589px]      /* Desktop: Auto width up to specific max */
        lg:min-h-[365px] lg:flex-shrink-0 /* Desktop: Height & prevent shrinking */
        lg:order-last                    /* Desktop: Ensure image block appears last */
      ">
        {/* Gradient border structure */}
        <div className="bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l rounded-[12px] p-[2px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30">
          <div className='bg-black p-1 rounded-[10px]'>
            <img
              // NOTE: You had b5.png in the mobile example and b6.png in the desktop for Row 2.
              // Make sure to use the correct image source for the row you intend. Let's assume b6.png is correct for Row 2.
              src="/banner/b6.png"
              alt="Heritage Image 2"
              className="w-full h-full object-cover rounded-[9px] min-h-[240px] lg:min-h-[355px]"
            />
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