interface CardProjectProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export default function CardProject({ title, description, image, link }: CardProjectProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Responsive image container */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-900">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          loading="lazy" // Lazy load images for better performance
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {description}
        </p>
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-400 hover:text-blue-300 text-sm transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}