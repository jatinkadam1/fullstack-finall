import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextSection = () => {
  useEffect(() => {
    // Animate headings
    const headings = gsap.utils.toArray(".heading");
    headings.forEach((head) => {
      gsap.fromTo(
        head,
        { opacity: 0, delay: 2 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: head,
            start: "top 80%",
            scrub: true,
          },
        }
      );
    });

    // Animate paragraphs
    const paras = gsap.utils.toArray(".para");
    paras.forEach((para) => {
      gsap.fromTo(
        para,
        { opacity: 0 }, // Starting state
        {
          opacity: 1, // Ending state
          scrollTrigger: {
            trigger: para,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <div className="flex w-full h-screen flex-col justify-center items-center gap-14">
        <h1 className="heading text-5xl font-bold transition-all">
          Whispers of Elegance
        </h1>
        <span className="para w-1/2 text-3xl font-semibold text-gray-600">
          We craft fragrances that evoke emotions and celebrate individuality.
          Each bottle blends the finest ingredients to create a scent uniquely
          yours, leaving an unforgettable impression. Elegance isn’t just
          seen—it’s felt and carried with you.
        </span>
      </div>
    </div>
  );
};

export default TextSection;
