import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I have been designing and developing responsive websites tailored to clients' needs. I specialize in creating intuitive user interfaces using HTML, CSS, JavaScript, and React.js, ensuring a seamless user experience across devices. My work involves closely collaborating with clients to understand their requirements and deliver solutions that align with their goals. I also integrate RESTful APIs and manage application states efficiently using Redux to enhance functionality.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                In my role as a Backend Developer for personal projects, I have built secure and scalable backend systems using Node.js and Express.js. My expertise extends to designing and optimizing databases, leveraging technologies like MongoDB and MySQL for efficient data storage and retrieval. I am experienced in deploying applications on cloud platforms such as Heroku and Netlify, ensuring high performance and availability for users.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Machine Learning Enthusiast
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a Machine Learning Enthusiast, I have worked on academic projects that showcase my interest and skills in this field. One of my notable projects includes developing a Skin Disease Detection System using Python and scikit-learn. This project involved applying machine learning algorithms for image segmentation and achieving accurate predictions. I also utilized tools like Matplotlib and Seaborn to visualize data and results effectively, providing deeper insights into the project outcomes.


                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
