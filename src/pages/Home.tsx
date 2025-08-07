import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center bg-gray-800 text-center gap-4 font-mono">
        <div className="flex flex-col md:flex-col-2">
          <div className="font-extrabold">
            <h1 className="text-green-500">
            <span className="text-xl sm:text-2xl md:text-5xl">Hello World! </span>
            <span className="text-xl sm:text-2xl md:text-5xl text-blue-600">
              I'm John-Bytes!
            </span>
            <h6 className="text-xs md:text-sm lg:text-md text-amber-50 font-light">Information Technology Enthusiast</h6>
          </h1>
          </div>
        </div>
        <div className="text-md md:text-xl lg:text-3xl text-blue-300 p-5 font-extrabold">
            Once you do the hard stuff, it becomes not that hard.
        </div>
        <div>
          <Button label="Know Me More!"  to="/about"/>
        </div>
      </section>
    </>
  );
}
