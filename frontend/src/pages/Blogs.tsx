import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs()
    if (loading) {
        return <div>     
            Loading...
        </div>
    }

    return <div>
        <AppBar />
        <div className="flex justify-center">
        <div className="max-w-4xl">
            {blogs?.map(blog => <BlogCard 
                authorName = {blog.author.name || "Anonymous"}
                title = {blog.title}
                content = {blog.content}
                publishedDate = {"2nd May 2023"}
                />
            )}
            </div>
        </div>
    </div>
} 