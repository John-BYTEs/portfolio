import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center bg-gray-800 text-center gap-4 font-mono pt-5">
        <div className="flex flex-col md:flex-col-2">
          <div className="font-extrabold">
            <h1 className="text-green-500">
            <span className="text-2xl md:text-5xl">Hello World! </span>
            <span className="text-2xl md:text-5xl text-blue-600">
              I'm John Bytes!
            </span>
            <h6 className="text-xs md:text-sm lg:text-md text-amber-50 font-light">Information Technology Enthusiast</h6>
          </h1>
          </div>
        </div>
        <div className="text-md md:text-xl lg:text-3xl text-blue-600 p-5 font-extrabold">
            Less is More.
        </div>
        <div>
          <Button label="Know Me!"  to="/about"/>
        </div>
      </section>
    </>
  );
}
