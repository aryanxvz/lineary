import { SignupInput } from "@aryanxvz/medium-common1"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../../config.ts"
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons"

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
            const storeName = response.data.name
            const jwt = response.data.jwt
            localStorage.setItem("token", jwt)
            localStorage.setItem("authorName", storeName)
            navigate("/blog")
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
                    <PasswordBox label="Password" placeholder="Enter your password" onChange={(e) => 
                        setInputs({
                            ...inputs,
                            password: (e.target as HTMLInputElement).value
                        })
                    }/>
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

interface PasswordBoxType {
    label: String
    placeholder: String
    onChange: (e: ChangeEvent) => void
}

export function InputBox({ label, placeholder, onChange, type } : InputBoxType ) {
    return <div>
        <label className="block mb-2 text-base text-black font-semibold pt-3">{label}</label>
        <input onChange={onChange} type={type as string || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder as string} required />
    </div>
}

export function PasswordBox({ label, placeholder, onChange } : PasswordBoxType) {
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        onChange(e);
    };

    return (
        <div>
            <label className="block mb-2 text-base text-black font-semibold pt-3">{label}</label>
            <div className="relative">
                <input
                    value={password}
                    onChange={handlePasswordChange}
                    type={visible ? "text" : "password"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10" // added pr-10 to make room for the icon
                    placeholder={placeholder as string}
                    required/>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <button
                        type="button"
                        onClick={() => setVisible(!visible)}
                        className="focus:outline-none">
                        {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </button>
                </div>
            </div>
        </div>
    );
}