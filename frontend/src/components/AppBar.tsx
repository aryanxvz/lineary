import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="flex justify-between border-b px-24 py-4">
        <Link to={'/blog'} className="flex flex-col justify-center">
            <div className="cursor-pointer items-center font-extrabold text-3xl pl-4">Medium</div>
        </Link>
        <div>
            <Link to={"/publish"}> 
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4">Create blog</button>
            </Link>
            <Avatar size={"big"} name="Aryan"/>
        </div>
    </div>
}