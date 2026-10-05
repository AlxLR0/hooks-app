import { Button } from "@base-ui/react/button"
import { Input } from "@base-ui/react/input"
import { Link } from "react-router"

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">LoginPage</h1>
        <hr />

        <form className="flex flex-col gap-2 my-10">
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />

            <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Button>
            <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600">
                Regresar al inicio
            </Link>
        </form>
    </div>
  )
}
