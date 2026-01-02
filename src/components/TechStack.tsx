import { stacks } from '../data/TechStackData';


export default function TechStack() {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4 mt-2">
        {stacks.map((stack) => (
          <span
            key={stack.name}
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${stack.color} flex items-center gap-2`}
          >
            {stack.name}
          </span>
        ))}
      </div>
    </>
  );
}
