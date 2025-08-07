export default function Footer(){
    return (
        <>
            <footer className="w-full h-full text-gray-400 p-6 bg-gray-900 text-xs md:text-sm lg:text-md">
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} Johndel Wolfe - Portfolio. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}