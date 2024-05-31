import { SecondQuote } from "../components/Quote"
import { SigninCard } from "../components/SigninCard"

export const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block">
                <SecondQuote />
            </div>
            <div>
                <SigninCard />
            </div>
        </div>
    </div>
} 