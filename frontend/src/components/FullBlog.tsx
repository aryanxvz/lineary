import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[now.getMonth()]; // Get the written month name
    const day = String(now.getDate()).padStart(2, '0');

    return `${day} ${month} ${year}`;
};


export const FullBlog = ({ blog }: {blog : Blog}) => {
    return <div>
        <AppBar />
        <div className="grid grid-cols-10 w-full px-24 pt-10">
            <div className="col-span-8 pl-2">
                <div className="text-4xl font-extrabold">
                    {blog.title}
                </div>
                <div className="font-extralight py-2 text-slate-500">
                    {blog.publishedAt}
                </div>
                <div className="py-4">
                    <p className="whitespace-pre-wrap">
                        {blog.content}
                    </p>
                </div>
            </div>

            <div className="pl-28 pt-6 col-span-2">
                <div className="text-base font-medium">
                    <div className="text-slate-500 px-1">
                        Author
                    </div>
                    <div className="flex items-center">
                        <Avatar size="small" name={blog.author.name}/>
                        <div>
                            <div className="text-2xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}
