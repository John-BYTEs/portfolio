type CardProjectProps = {
    title?: string;
    description?: string;
    link?: string;
    image: string;
}

export default function CardProject({title, description, link, image}: CardProjectProps) {
    return (
        <>
        <div className="bg-gray-900 rounded-lg shadow p-4 flex flex-col">
            <img
                src={image}
                alt={title || "Project"}
                className="rounded mb-2 w-full h-48 object-cover"
            />
            <h2 className="font-bold text-2xl mb-1 text-start text-gray-300">
                {title || "Untitled Project"}
            </h2>

            <p className="text-gray-400 text-sm mb-2 text-start font-sans">
                {description}
            </p>

            <div className="flex justify-between items-center mt-auto">

                {link && (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                    >
                        View
                    </a>
                )}
            </div>
        </div>
        </>
    );
}