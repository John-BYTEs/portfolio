export default function Footer() {
    return (
        <footer className="w-full text-gray-400 py-6 bg-gray-800/30 border-t border-gray-800 backdrop-blur-sm">
            
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left px-6">
                        <p className="text-xs md:text-sm">
                            &copy; {new Date().getFullYear()} Johndel Wolfe - Portfolio. All rights reserved.
                        </p>
                        
                    </div>
                    <p className="text-xs text-gray-500 px-2">
                        Built with React, TypeScript, TailwindCSS, and assisted by AI.
                    </p>
                </div>
        </footer>
    );
}