export default function About() {
  return (
    <>
      <section className="w-full h-screen px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center bg-gray-800 text-center gap-4 font-mono pt-5">
        <div className="flex flex-col md:flex-col-2">
          <div>
            <h1 className="text-2xl md:text-5xl text-blue-600">Coming Soon!</h1>
            <p className="text-md md:text-xl lg:text-3xl text-gray-400 p-5 font-extrabold">
              I'm still in development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
