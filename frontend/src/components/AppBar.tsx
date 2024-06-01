import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="flex justify-between border-b px-40 py-4">
        <div className="flex flex-col justify-center font-extrabold text-2xl">Medium</div>
        <div><Avatar size={"big"} name="Aryan"/></div>
    </div>
}