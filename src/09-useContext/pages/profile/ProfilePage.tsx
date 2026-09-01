import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button"
import { use } from "react"

export const ProfilePage = () => {
    const { user, logout } = use(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-6 pb-4 border-b-2 border-b-amber-50">User profile</h1>

            <pre className="my-4 overflow-x-auto">{JSON.stringify(user, null, 2)}</pre>

            <Button variant="destructive" onClick={logout}>Logout</Button>
        </div>
    )
}
