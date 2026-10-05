import { Link } from "react-router"

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">AboutPage</h1>
        <hr />

        <div className="flex flex-col gap-2">
            <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Profile
            </Link>
            <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Login
            </Link>
        </div>
    </div>
  )
}
