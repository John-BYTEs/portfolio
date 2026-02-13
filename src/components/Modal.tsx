// components/Modal.tsx
import { useEffect } from "react";
import type { ProjectItem } from "@/types/project-types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProjectItem | null;
}

export default function Modal({ isOpen, onClose, item }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 backdrop-blur-sm modal-content"
      onClick={onClose}
    >
      <div 
        className="relative bg-gray-800 rounded-t-2xl sm:rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto 
                   transform transition-transform duration-300 ease-out
                   sm:translate-y-0 translate-y-0"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >

        <div className="p-4 sm:p-6">
          {/* Image - responsive height */}
          {item.image && (
            <div className="relative -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-4 sm:mb-6">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-2xl sm:rounded-t-lg"
              />
              {/* Optional gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
          )}
          
          {/* Title - responsive text size */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 
                         pr-8 sm:pr-0">
            {item.title}
          </h2>
          
          {/* Description - responsive text and spacing */}
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            {item.description}
          </p>
          
          {/* Link button - full width on mobile */}
          {item.link && (
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center
                           bg-blue-600 hover:bg-blue-700 
                           text-white text-sm sm:text-base
                           px-4 sm:px-6 py-2.5 sm:py-3 
                           rounded-lg transition-all duration-200
                           transform hover:scale-105 active:scale-95
                           shadow-lg hover:shadow-xl
                           w-full sm:w-auto"
              >
                <span>Visit Project</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              {/* Optional: Add a secondary action */}
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center
                           bg-gray-700 hover:bg-gray-600
                           text-gray-200 text-sm sm:text-base
                           px-4 sm:px-6 py-2.5 sm:py-3 
                           rounded-lg transition-all duration-200
                           w-full sm:w-auto sm:order-first"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}