import { SigninInput } from "@aryanxvz/medium-common"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { InputBox } from "../components/SignupCard"
import { BACKEND_URL } from "../../config"
import axios from "axios"

export const SigninCard = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState<SigninInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, inputs)
            const storeName = response.data.name
            const jwt = response.data.jwt
            localStorage.setItem("token", jwt)
            localStorage.setItem("authorName", storeName)
            navigate("/blog")
        } catch(e) {
            alert("Error while signing in")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Login to your account
                    </div>
                    <div className="text-center text-slate-600 mt-1 mb-2">
                        Create an account? <Link className="underline" to = {"/signup"}>Sign up</Link>
                    </div>
                </div>
                <div>
                    <InputBox label="Name" placeholder="Author name" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            name: (e.target as HTMLInputElement).value
                        })
                    } />
                    <InputBox label="Username" placeholder="Enter your username" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            username: (e.target as HTMLInputElement).value
                        })
                    } />
                    <InputBox label="Password" type="password" placeholder="Enter your password" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            password: (e.target as HTMLInputElement).value
                        })
                    } />
                    <button onClick={sendRequest} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign in</button>
                </div>
            </div>
        </div>
    </div>
}