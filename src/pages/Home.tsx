import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center bg-gray-700 text-center gap-4 font-mono">
        <div className="flex flex-col md:flex-col-2">
          <div className="font-extrabold">
            <h1 className="text-gray-500">
            <span className="text-xl sm:text-2xl md:text-5xl">Hello World! </span>
            <span className="text-xl sm:text-2xl md:text-5xl">
              <span className="text-gray-500">I'm </span>
              <span className="text-gray-400">Johndel!</span>
            </span>
            </h1>
          </div>
        </div>
        <div className="text-md md:text-xl lg:text-3xl text-gray-300 p-5 font-extrabold">
            Once you do the hard stuff, it becomes not that hard.
        </div>
        <div>
          <Button label="Know Me More!"  to="/about"/>
        </div>
      </section>
    </>
  );
}
