import { AppBar } from "../components/AppBar"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { BlogsCard } from "../components/BlogsCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs()
    if (loading) {
        return <div>
            <AppBar />
            <div>
                <div>     
                <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return <div>
        <AppBar />
        <div className="flex justify-center">
        <div className="max-w-4xl">
            {blogs?.map(blog => <BlogsCard 
                id={blog.id}
                authorName = {blog.author.name || "Anonymous"}
                title = {blog.title}
                content = {blog.content}
                publishedAt = {blog.publishedAt}
                />
            )}
            </div>
        </div>
    </div>
} 