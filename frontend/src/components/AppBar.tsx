import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="flex justify-between border-b px-24 py-4">
        <Link to={'/blogs'}>
            <div className="cursor-pointer flex flex-col justify-center font-extrabold text-3xl">Medium</div>
        </Link>
        <div><Avatar size={"big"} name="Aryan"/></div>
    </div>
}