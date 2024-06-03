import { Link } from "react-router-dom"

export const AppBar = () => {
    return <div className="flex justify-between border-b px-24 py-4">
        <Link to={'/blog'} className="flex flex-col justify-center">
            <div className="cursor-pointer items-center font-extrabold text-3xl pl-4">Medium</div>
        </Link>
        <div>
            <Link to={"/publish"}> 
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4">Create blog</button>
            </Link>
            <Avatar size={"big"} name={localStorage.getItem("authorName") || "Anonymous"} />
        </div>
    </div>
}

export function Avatar({ name, size = "small" }:{name : string, size? : "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} text-xs text-gray-600 dark:text-gray-300`}> {name[0]} </span>
    </div>
}