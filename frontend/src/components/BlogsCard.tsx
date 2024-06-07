import { Link } from "react-router-dom"
import { Avatar } from "./AppBar"

export interface BlogsCardType {
    id: string
    authorName: string
    title: string
    content: string
    publishedAt: string
}

export const BlogsCard = ({ id, authorName, title, content, publishedAt } : BlogsCardType) => {
    return <Link to={`${id}`}>
        <div className="p-10 border-b border-slate-200 pb-4 cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar size={"small"} name={authorName}/> 
                </div>
                <div className="font-light pl-2">{authorName}</div>
                <div className="px-2">&#8226;</div>
                <div className="font-extralight pl-1 text-slate-500">{new Date(publishedAt).toDateString().slice(4)}</div>
            </div>
            <div className="text-2xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-light">
                {content.slice(0, 300) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 250)} min(s) read`}
            </div>
        </div>
    </Link>
}

