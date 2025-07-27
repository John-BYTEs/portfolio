import profile from "/profile.jpg";

export default function About() {
  return (
    <>
      <section className="w-full h-screen px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center bg-gray-800 text-center gap-4 font-mono pt-5">
        <div className="w-64 pt-20 h-screen grid grid-rows-5 md:grid-flow-col gap-4">
          
          <div className="row-span-1 flex justify-center border border-white items-center md:col-span-5">
            <img
            src={profile}
            alt="profile"
            className="w-30 h-30 rounded-full object-cover"
          ></img>
          </div>

          <div className="row-span-1 md:col-span-3 border border-white text-blue-600">
            1fghfghfghfgh
          </div>

          <div className="row-span-1 md:col-span-3 border border-white text-pink-600">
            3
          </div>

          <div className="row-span-1 md:col-span-3 border border-white text-green-600">
            4
          </div>

          <div className="row-span-1 md:col-span-3 border border-white text-orange-600">
            5
          </div>
          
        </div>
      </section>
    </>
  );
}
