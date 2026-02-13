import { items } from "../data/Items";
import CardProject from "./CardProject";

export default function ProjectCarousel() {
  return (
    <>
      <div className="carousel-container">
        <div className="carousel grid gap-3 grid-cols-6 font-sans">
          {items.map((item, i) => (
            <CardProject
              key={i}
              title={item.title}
              image={item.image} description={""}            />
          ))}
        </div>
      </div>
    </>
  );
}
