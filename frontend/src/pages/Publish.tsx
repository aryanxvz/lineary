import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentDate } from "../components/FullBlog"

export const Publish = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const Navigate = useNavigate()

    return <div>
        <AppBar />
        <div className="flex justify-center pt-10">
            <div className="w-10/12">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Title" />
            </div>
        </div>
        <TextEditor onChange={(e) => {
            setContent(e.target.value)
        }} />
        <div className="flex justify-end pr-32 pt-3">
        <button onClick={ async () => {
                    const publishDate = getCurrentDate();
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content,
                        publishedAt: publishDate
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    Navigate(`/blog/${response.data.id}`)
            }} className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
            Publish</button>
        </div>
    </div>
}

function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="flex justify-center pt-5">       
        <textarea id="pWrap" onChange={onChange} rows={22} className="w-10/12 block p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Tell your story..."></textarea>
    </div>
}
