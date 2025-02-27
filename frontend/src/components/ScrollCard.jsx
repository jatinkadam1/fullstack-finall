import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollCard = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/4736017/pexels-photo-4736017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/2508558/pexels-photo-2508558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/6310591/pexels-photo-6310591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card) => {
      gsap.to(card, {
        scale: 0.9,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="top-1/2 sticky md:flex hidden justify-center items-center content-center gap-56 mb-56 mr-40">
        <h1 className="text-4xl font-bold">Feel Your Essence</h1>
        <h1 className="text-4xl font-bold">Go Beyond</h1>
        <h1 className="text-4xl font-bold">Be Bold</h1>
      </div>

      <div className="flex flex-col items-center gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="card w-full md:w-[30vw] h-[60vh] flex flex-col items-center rounded-xl overflow-hidden sticky top-16 drop-shadow-2xl"
          >
            <img
              src={image.src}
              className="w-full h-full object-cover"
              alt={`Scroll Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollCard;
