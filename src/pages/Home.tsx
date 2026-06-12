import Button from "../components/Button";
import Dino from "../components/ui/Dino";

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="w-full mt-32 px-2 sm:px-4 md:px-8 flex flex-col items-center bg-transparent text-center gap-4 font-sans pt-32 pb-40 min-h-screen">
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
        <div className="flex flex-col items-center gap-4 mt-8 animate-bounce">
          <Button label="Know Me More!" to="#about" onClick={scrollToAbout} />
        </div>
        
      </section>
    </>
  );
}