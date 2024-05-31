import { SigninInput } from "@aryanxvz/medium-common"
import { useState } from "react"
import { Link } from "react-router-dom"
import { InputBox } from "../components/SignupCard"

export const SigninCard = () => {
    const [inputs, setInputs] = useState<SigninInput>({
        username: "",
        password: ""
    })

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
                    <InputBox label="Username" placeholder="Enter your username" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            username: (e.target as HTMLInputElement).value
                        })
                    } />
                    <InputBox label="Password" type="password" placeholder="Enter your password" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            username: (e.target as HTMLInputElement).value
                        })
                    } />
                    <button type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign in</button>
                </div>
            </div>
        </div>
    </div>
}