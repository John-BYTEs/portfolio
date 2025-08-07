import profile from "/profile.jpg";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import Skills from "../components/Skills";
import Carousel from "../components/Carousel";

export default function About() {
  return (
    <>
      <section className="w-full h-full px-4 sm:px-6 md:px-8 bg-gray-800 text-center gap-4 font-mono pt-5">
        <div className="md:h-screen p-5 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex flex-col pt-6  rounded-2xl items-center">
            <img
              src={profile}
              alt="profile"
              className="w-30 h-30 rounded-full object-cover"
            ></img>
            <h1 className="text-xl md:text-2xl pt-5 font-extrabold text-blue-600">
              Johndel Wolfe
            </h1>
            <span className="text-green-500 mb-2 font-semibold">IT Student</span>
            <Card title="SKILLS">
              <div>
                <Skills />
              </div>
            </Card>
          </div>

          <hr className="border-green-400" />

          <div className="md:w-full flex flex-col space-y-3">
            <Card
              title="BIOGRAPHY"
              content="The rapid evolution of technology drives my passion for IT, particularly in Web Development, Graphics, and Networking. What motivates me to continue learning and growing in this field is my family."
            />

            <Card title="PROJECTS">
              <NavLink to="/projects" className={"text-red-600 font-extrabold"}>
                <Carousel />
              </NavLink>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
