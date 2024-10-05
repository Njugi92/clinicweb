import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg;pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          nostrum quis voluptas blanditiis necessitatibus quia voluptate
          explicabo! Hic qui veniam ex modi fugit laborum velit ipsam, et
          ratione, dolorum at reprehenderit. Ipsam, tenetur itaque?
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae
          aperiam fuga! Voluptatem, nulla a! Sequi omnis soluta nobis libero
          molestias ullam numquam dicta. Ab, provident sunt. Similique!
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
          ratione fugiat porro dicta sed aut perferendis temporibus blanditiis
          voluptas quas in explicabo officia est ea.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img src={img} alt="img" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
