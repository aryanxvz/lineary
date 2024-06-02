import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog : Blog}) => {
    return <div>
        <AppBar />
        <div className="grid grid-cols-10 w-full px-20 pt-10">
            <div className="col-span-8 pl-2">
                <div className="text-4xl font-extrabold">
                    {blog.title}
                </div>
                <div className="font-extralight py-2 text-slate-500">
                    Posted on 2nd December 2024
                </div>
                <div className="py-4">
                    {blog.content}
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