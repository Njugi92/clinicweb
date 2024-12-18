import React, { useState, useEffect } from "react";
import Button from "../layouts/Button";

const slides = [
  {
    image: "./docmachine.jpg",
    title: "Special Clinic Services",
    description:
      "We run clinics dedicated towards treatment and management of specific disorders.",
  },
  {
    image: "./docpat.jpg",
    title: "Outpatient Services",
    description:
      "We offer outpatient services treating patients with health problems who visit the hospital for diagnosis or treatments.",
  },
  {
    image: "./home3.jpg",
    title: "Ultrasound and ECG Measures Services",
    description:
      "Diagnostic ultrasound provides information about internal body parts, including kidneys, female reproduction organs, blood vessels, heart, and liver. We also provide pregnancy ultrasound services. ECG measures signs of heart disease by measuring electrical activities generated by the heart as it contracts.",
  },
  {
    image: "./home.webp",
    title: "Empowering Health choices for a Vibrant Life Your Trusted...",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quae obcaecati dolore magnam sit deserunt, beatae aperiam totam corrupti adipisci quis quasi nostrum excepturi rerum quas itaque.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 12000); // Each slide is displayed for 12 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-#36ae9a relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>

      {/* Content area */}
      <div className="relative w-full lg:w-4/5 space-y-5 mt-10 z-10 transition-all duration-1000 ease-in-out">
        <h1 className="text-5xl font-bold leading-tight animate-slide-in-title">
          {slides[currentSlide].title}
        </h1>
        <p className="animate-slide-in-description">
          {slides[currentSlide].description}
        </p>
        <Button title="See Services" />
      </div>

      {/* Tailwind CSS animations for the title and description */}
      <style>
        {`
        @keyframes slideIn {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20%); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-in-title {
          animation: fadeIn 1s ease forwards 2s;
        }

        .animate-slide-in-description {
          animation: fadeIn 1s ease forwards 3s;
        }
        `}
      </style>
    </div>
  );
};

export default Home;
