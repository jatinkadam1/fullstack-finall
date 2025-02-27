import React, { useState, useEffect } from "react";
import "../stylesheets/Videoslider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBottleDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ManWoman from "./ManWoman";
import Product from "./Product";

const videos = [
  {
    src: "https://videos.pexels.com/video-files/8447650/8447650-uhd_2732_1440_25fps.mp4",
    heading: "Leave a Lasting Impression",
  },
  {
    src: "https://videos.pexels.com/video-files/4154241/4154241-uhd_2732_1440_25fps.mp4",
    heading: "Awaken your senses",
  },
  {
    src: "https://videos.pexels.com/video-files/1705055/1705055-hd_1920_1080_30fps.mp4",
    heading: "Unleash the Power of Scent",
  },
  {
    src: "https://videos.pexels.com/video-files/7815759/7815759-hd_1920_1080_25fps.mp4",
    heading: "Find your Signature Scent",
  },
];

const Slider = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    checkUser();
    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  useEffect(() => {
    // Listen for changes in localStorage within the same tab
    const handleStorageChange = () =>
      setUser(
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : null
      );

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    localStorage.removeItem("user"); // Remove user data
    setUser(null); // Update state
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slider-container">
        <div className="flex text-center fixed items-center w-full z-10 h-20">
          <div className="flex">
            <ul className="flex gap-5 w-auto px-10 h-8 rounded-lg bg-white bg-opacity-40 ml-8 items-center justify-center font-bold">
              <li className="hidden md:block">
                <button
                  className="hover:bg-gray-500 px-3 rounded-lg"
                  onClick={() => navigate("/products")}
                >
                  All
                </button>
              </li>
              <li className="hidden md:block">
                <button
                  className="hover:bg-gray-500 px-3 rounded-lg"
                  onClick={() => navigate("/men")}
                >
                  Men
                </button>
              </li>
              <li className="hidden md:block">
                <button
                  className="hover:bg-gray-500 px-3 rounded-lg"
                  onClick={() => navigate("/women")}
                >
                  Women
                </button>
              </li>

              {/* Conditionally Render Signup/Login or Logout */}
              <li>
                {user ? (
                  <button
                    className="hidden md:block hover:bg-gray-500 px-3 rounded-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="hover:bg-gray-500 px-3 rounded-lg"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                )}
              </li>

              <li className="hidden md:block">
                <button
                  className="hover:bg-gray-500 px-3 rounded-lg"
                  onClick={() => navigate("/products")}
                >
                  Trending
                </button>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center text-center w-1/3">
            <h1 className="absolute text-white z-10 mix-blend-difference text-3xl font-bold">
              Odoré
            </h1>
          </div>

          <div className="z-10 w-80">
            <ul className="flex gap-16 pl-32">
              <li className="hidden md:block">
                <button
                  className="relative px-4 py-2 transition-all bg-white bg-opacity-40 rounded-lg group hover:pl-20"
                  onClick={() => navigate("/contact")}
                >
                  <span className="font-semibold absolute left-1/3 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Contact
                  </span>
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </li>
              <li className="hidden md:block">
                <button
                  className="relative px-4 py-2 transition-all bg-white bg-opacity-40 rounded-lg group hover:pl-24"
                  onClick={() => navigate("/products")}
                >
                  <span className="font-semibold absolute left-1/3 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Products
                  </span>
                  <FontAwesomeIcon icon={faBottleDroplet} />
                </button>
              </li>
              <li className="">
                <button
                  className="relative px-4 py-2 transition-all bg-white bg-opacity-40 rounded-lg group hover:pl-20"
                  onClick={() => navigate("/cart")}
                >
                  <span className="font-bold absolute left-1/3 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Cart
                  </span>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Background Slider */}
        <div className="background-slider bg-black">
          <div
            className="slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {videos.map((video, index) => (
              <div key={index} className="slide">
                <video
                  src={video.src}
                  muted
                  autoPlay
                  loop
                  className="background-video"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Foreground Slider */}
        <div className="foreground-slider">
          <div
            className="slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="slide flex items-center text-center justify-center"
              >
                <h1 className="absolute font-bold text-xl mix-blend-difference drop-shadow-2xl">
                  {video.heading}
                </h1>
                <button
                  className="absolute mt-20 font-bold px-3 py-1 rounded-3xl z-10 bg-white bg-opacity-40"
                  onClick={() => navigate("/products")}
                >
                  Shop Now
                </button>
                <video
                  src={video.src}
                  muted
                  loop
                  className="foreground-video"
                  autoPlay
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="dots bg-white px-5 py-3 rounded-3xl bg-opacity-40">
          {videos.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <ManWoman />
      <Product />
    </>
  );
};

export default Slider;
