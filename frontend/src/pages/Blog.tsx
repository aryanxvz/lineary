import { useParams } from "react-router-dom"
import { FullBlog } from "../components/FullBlog"
import { useBlog } from "../hooks"

export const mainBlog = {
    id: "",
    title: "",
    content: "",
    publishedAt: "",
    author: {
        name: ""

    }
};

export const Blog = () => {
    const { id } = useParams()
    const {loading, blog} = useBlog({
        id: id || ""
    })
    if (loading) {
        return <div>
            loading...
        </div>
    }
    if (!blog) {
        return <div>
            blog not found
        </div>
    }
    
    return <div>
            <FullBlog blog={blog} />
    </div>
}