import profile from "/profile.jpg";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import Skills from "../components/Skills";
import Carousel from "../components/ProjectCarousel";
import TechStack from "@/components/TechStack";

export default function About() {
  
  return (
    <>
      {/* <section className="min-h-screen text-gray-100 font-mono px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12"> */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Profile & Personal Info */}
          <div className="lg:w-1/3">
            <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
              {/* Profile Image */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-6">
                  <img
                    src={profile}
                    alt="Johndel Wolfe - IT Enthusiast"
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                  />
                </div>

                <h2 className="text-2xl font-sans md:text-3xl font-bold text-white mb-2">
                  Johndel Wolfe
                </h2>
                <span className="text-lg text-gray-400 font-semibold bg-gradient-to-r bg-clip-text mb-4">
                  IT Enthusiast & Developer
                </span>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
                  Core Expertise
                </h3>
                <Skills />
              </div>

              {/* Quick Links/CTA */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
                  Tech Stack
                </h3>
                <TechStack />
              </div>

              
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3 space-y-8">
            {/* Biography Card */}
            <Card
              title="My Journey"
              titleClassName="text-2xl font-bold text-white mb-4"
              content={
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    The rapid evolution of technology drives my passion for IT,
                    particularly in
                    <span className="font-semibold text-gray-400">
                      {" "}
                      Web Development
                    </span>
                    ,
                    <span className="font-semibold text-gray-500">
                      {" "}
                      Graphics
                    </span>
                    , and
                    <span className="font-semibold text-gray-600">
                      {" "}
                      Networking
                    </span>
                    .
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in creating technology solutions that are not only
                    functional but also accessible and visually engaging. My
                    approach combines technical expertise with creative
                    problem-solving to deliver impactful digital experiences.
                  </p>
                </div>
              }
            />

            {/* Philosophy Card */}
            <Card
              title="My Philosophy"
              titleClassName="text-2xl font-bold text-white mb-4"
              content={
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <p className="text-gray-300">
                      Once you do the hard stuff, it becomes not that hard.
                    </p>
                  </div>
                </div>
              }
            />

            {/* Featured Projects Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-sans font-bold text-white mb-6">
                Featured Projects
              </h2>
              <Carousel />
              <NavLink
                to="/projects"
                className="mt-3 block w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                View Projects
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
}
