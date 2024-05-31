import { Quote } from "../components/Quote"
import { SignupCard } from "../components/SignupCard"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <SignupCard />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
} 