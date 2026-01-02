import { Link } from "react-router-dom"

type ButtonProps = {
    label : string
    to : string
}

export default function Button({label, to} : ButtonProps) {
    return (
        <Link to={to}>
            <div>
                <button className="bg-gray-800 hover:bg-gray-600 text-white font-mono text-sm sm:text-base md:text-lg lg:text-xl rounded p-2 px-3 m-3 cursor-pointer animate-bounce">{label}</button>
            </div>
        </Link>
    )
}