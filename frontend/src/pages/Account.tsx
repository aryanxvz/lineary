import { useNavigate } from "react-router-dom";
import { Avatar } from "../components/AppBar"
import { useCallback } from "react";

export const Account = () => {
    const navigate = useNavigate();
    
    const logout = useCallback(() => {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('authorName');
            navigate('/signup');
        } catch (e) {
            alert("Error while logging out");
        }
    }, [navigate]);

    return <div>
        <section className="h-screen flex justify-center flex-col bg-gray-100">
            <div className="flex flex-col items-center justify-center px-10 py-8 mx-auto md:h-screen md:py-0">
                <div className="w-full bg-white rounded-md shadow pr-6 pl-6 pt-10 pb-10">
                    <div className="flex justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex items-center">
                            <Avatar size={"big"} name={localStorage.getItem("authorName") || "Anonymous"} />
                            <div className="text-4xl md:text-5xl font-bold pl-4">
                                {localStorage.getItem("authorName") || "Anonymous"}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="">
                            <div className="text-md pt-4">
                                Are you sure you want to Logout?
                            </div>
                            <div className="">
                                <button onClick={logout} type="button" className="w-full mt-4 mb-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
