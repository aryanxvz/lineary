import { SignupInput } from "@aryanxvz/medium-common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../../config.ts"

export const SignupCard = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, inputs)
            const jwt = response.data
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch(e) {
            alert("Error while igning up")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-center text-slate-600 mt-1 mb-2">
                        Already have an account? <Link className="underline" to = {"/signin"}>Login</Link>
                    </div>
                </div>
                <div>
                    <InputBox label="Username" placeholder="Enter your username" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            username: (e.target as HTMLInputElement).value
                        })
                    } />
                     <InputBox label="Name" placeholder="Author name (Optional)" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            name: (e.target as HTMLInputElement).value
                        })
                    } />
                    <InputBox label="Password" type="password" placeholder="Enter your password" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            password: (e.target as HTMLInputElement).value
                        })
                    } />
                    <button onClick={sendRequest} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign up</button>
                </div>
            </div>
        </div>
    </div>
}


interface InputBoxType {
    label: String
    placeholder: String
    onChange: (e: ChangeEvent) => void
    type?: String
}

export function InputBox({ label, placeholder, onChange, type } : InputBoxType ) {
    return <div>
        <label className="block mb-2 text-base text-black font-semibold pt-3">{label}</label>
        <input onChange={onChange} type={type as string || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder as string} required />
    </div>
}