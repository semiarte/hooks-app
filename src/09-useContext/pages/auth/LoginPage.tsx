import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {
    const { login } = useContext(UserContext);
    const [userId, setUserId] = useState('');

    const navigation = useNavigate();

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = login(+userId);

        if (!result) {
            toast.error('User not found');
            return;
        }

        navigation('/profile');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-6 pb-4 border-b-2 border-b-amber-50">Login</h1>
            <form className="flex flex-col gap-2 my-10" onSubmit={handleSubmit}>
                <Input
                    type="number"
                    placeholder="User ID"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                />
                <Button type="submit">Login</Button>
            </form>

            <Link to="/about">
                <Button variant="ghost">Back to about page</Button>
            </Link>
        </div>
    )
}
