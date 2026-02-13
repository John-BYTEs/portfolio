// import View from '@mui/icons-material/VisibilityRounded';

// type CardProjectProps = {
//     title?: string;
//     description?: string;
//     link?: string;
//     image: string;
// }

// export default function CardProject({title, description, link, image}: CardProjectProps) {
//     return (
//         <>
//         <div className="bg-gray-800 rounded-lg shadow p-4 flex flex-col">
//             <img
//                 src={image}
//                 alt={title || "Project"}
//                 className="rounded mb-2 w-full h-48 object-cover"
//             />
//             <h2 className="font-bold text-2xl mb-1 text-start text-gray-300">
//                 {title || "Untitled Project"}
//             </h2>

//             <p className="text-gray-400 text-sm mb-2 text-start font-sans">
//                 {description}
//             </p>

//             <div className="flex justify-between items-center mt-auto">

//                 {link && (
//                     <a 
//                         href={link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors"
//                     >
//                         <View/>
//                     </a>
//                 )}
//             </div>
//         </div>
//         </>
//     );
// }

// components/CardProject.tsx
import type { ProjectItem } from "@/types/project-types";

type CardProjectProps = Pick<ProjectItem, 'title' | 'description' | 'image' | 'link'>;

export default function CardProject({ title, image }: CardProjectProps) {
  return (
    <div className="cursor-pointer bg-gray-800 rounded-lg shadow p-4 flex flex-col transition hover:shadow-2xl">
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded mb-3"
        />
      )}
      <h3 className="text-lg font-extrabold font-mono text-white mt-2 mb-2">{title}</h3>
    </div>
  );
}