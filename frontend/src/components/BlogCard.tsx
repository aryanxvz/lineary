
interface BlogCardType {
    authorName: string
    title: string
    content: string
    publishedDate: string
}

export const BlogCard = ({ authorName, title, content, publishedDate } : BlogCardType) => {
    return <div className="p-10 border-b border-slate-200 pb-4">
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar size={"small"} name={authorName}/> 
            </div>
            <div className="font-light pl-2">{authorName}</div>
            <div className="px-2">&#8226;</div>
            <div className="font-extralight pl-1 text-slate-500">{publishedDate}</div>
        </div>
        <div className="text-2xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-light">
            {content.slice(0, 300) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} min(s) read`}
        </div>
    </div>
}

export function Avatar({ name, size = "small" }:{name : string, size? : "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} text-xs text-gray-600 dark:text-gray-300`}> {name[0]} </span>
    </div>
}