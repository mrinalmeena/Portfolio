import React from "react";


export default function HeroBanner() {
  return (
   <section className="bg-[#edece7] pb-14">
      <div className="max-w-[1350px] mx-auto px-6 lg:px-10">

<section className="bg-[#edece7] pt-10 pb-8">
  <div className="max-w-7xl mx-auto text-center">

    <h1
      className="
        font-serif
        text-[#2D2520]
        font-bold
        leading-[0.85]
        text-[5rem]
        md:text-[7rem]
        lg:text-[8rem]
      "
    >
      <span >Mrinal Meena</span>
      
    </h1>

  </div>
</section>

        {/* Hero Image */}
        <div >
          <img
            src={`${import.meta.env.BASE_URL}images/hero-banner-closeup.png`}
            alt="Hero"
          />

        </div>

        {/* Tagline */}
        <div className="flex justify-center mt-8">
          <div className="border-y border-[#8A8179] px-10 py-3">
            <p className="font-serif text-[18px] tracking-[0.18em] text-[#463934]">
              <b>Software Developer</b>
              <span className="mx-4 text-[#9A5B47]">•</span>
              <b>AI / ML Enthusiast</b>
              <span className="mx-4 text-[#9A5B47]">•</span>
             <b>Builder</b> 
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}