import type { ProjectItem } from "@/types/project-types";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProjectItem | null;
}

export default function Modal({ isOpen, onClose, item }: ModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors text-white"
        >
          <CloseIcon />
        </button>

        {/* Responsive image */}
        <div className="relative w-full bg-gray-800">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-auto max-h-[50vh] object-contain object-center"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            {item.title}
          </h2>
          <p className="text-gray-300 mb-4">
            {item.description}
          </p>
          
          {item.technologies && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View Live Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}