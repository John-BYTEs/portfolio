import { items } from "../data/Items";
import CardProject from "@/components/CardProject";

export default function Project() {
  return (
    <>
      {/* <section className="w-full h-full px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center text-center gap-4 font-mono pt-5"> */}
        <main className="flex-1 text-gray-200 p-6 overflow-y-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
          <CardProject key={i} title={item.title} description={item.description} image={item.image} link={item.link}/>
            ))}
            </div>
        </main>
          {/* {items.map((item, i) => (
            <div key={i}  className="flex flex-col md:flex-col-2 shadow-2xl bg-gray-900 rounded-2xl m-2 p-3 text-white">
              <h1 className="text-green-500 m-2 text-start text-2xl md:text-4xl">
                {item.title}
              </h1>
              <p className="m-2 text-start">
                {item.description}
              </p>
            <a href={item.link} className="text-blue-600 m-3">
            <h2>{item.link}</h2>
          </a>
          <div className="p-5">
            <img src={item.image} alt="..." className="rounded-lg" />
          </div>
            </div>
          ))} */}

      {/* </section> */}
    </>
  );
}
