import profile2 from "/profile2.png";
import {
  SiReact,
  SiLaravel,
  SiMysql,
  SiGit,
  SiTailwindcss,
  SiPhp,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export default function About() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    { name: "React", icon: <SiReact className="text-blue-400" size={20} /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" size={20} /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={20} /> },
    { name: "Git", icon: <SiGit className="text-orange-600" size={20} /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-cyan-400" size={20} />,
    },
    {
      name: "Illustrator",
      icon: <TbBrandAdobeIllustrator className="text-orange-500" size={20} />,
    },
    {
      name: "Photoshop",
      icon: <TbBrandAdobePhotoshop className="text-blue-600" size={20} />,
    },
    { name: "PHP", icon: <SiPhp className="text-purple-500" size={20} /> },
    { name: "Java", icon: <FaJava className="text-red-600" size={20} /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={20} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" size={20} />,
    },
  ];

  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-8 py-12 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Bio Text */}
        <h1 className="text-center font-bold text-3xl sm:text-4xl mb-6">
          About Me
        </h1>
        <div className="mb-8">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Hello! I'm Johndel, an Information Technology enthusiast and aspiring
            Backend Developer. I specialize in building web applications using
            Laravel, PHP, MySQL, and React. I enjoy designing efficient backend
            systems, developing APIs, and creating solutions that are reliable,
            secure, and scalable. Beyond web development, I have interests in
            networking and cybersecurity, which broaden my understanding of how
            modern systems operate. I am continuously learning and seeking
            opportunities to grow as a developer while building technology that
            makes a meaningful impact.
          </p>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Profile Info */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={profile2}
              alt="Johndel Wolfe"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
            />
            <div>
              <h2 className="text-xl font-bold text-white">Johndel Wolfe</h2>
              <p className="text-gray-400 text-sm">IT Enthusiast & Developer</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Core Expertise */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">
            Core Expertise
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Backend Development",
              "Web Development",
              "Networking",
              "Graphic Design",
              "Technical Troubleshooting",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 text-gray-300"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Philosophy */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            My Philosophy
          </h3>
          <p className="text-gray-300 italic text-base sm:text-lg">
            "Once you do the hard stuff, it becomes not that hard."
          </p>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* View Projects Button */}
        <div>
          <button
            onClick={scrollToProjects}
            className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors duration-200 cursor-pointer"
          >
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
