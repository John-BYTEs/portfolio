import Button from "../components/Button";
import Dino from "../components/ui/Dino";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="w-full mt-32 px-2 sm:px-4 md:px-8 flex flex-col items-center bg-transparent text-center gap-4 font-mono pt-32 pb-40 min-h-screen">
        <Dino />
        <div className="flex flex-col md:flex-col-2">
          <div className="font-extrabold">
            <h1 className="text-gray-500">
              <span className="text-xl sm:text-2xl md:text-5xl">
                Hello World!
              </span>
              <span className="text-xl sm:text-2xl md:text-5xl">
                <span className="text-gray-400"> I'm Johndel!</span>
              </span>
            </h1>
          </div>
        </div>
        <div className="text-md md:text-xl lg:text-3xl text-gray-300 p-5 font-extrabold">
          Once you do the hard stuff, it becomes not that hard.
        </div>
        <div>
          <Button label="Know Me More!" to="#about" onClick={scrollToAbout} />
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <KeyboardArrowDownIcon className="text-gray-400 text-4xl" />
        </div>
      </section>
    </>
  );
}