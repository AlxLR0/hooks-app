import { UserContext } from "@/09-useContext/context/UserContext.context"
import { Button } from "@base-ui/react/button"
import { Input } from "@base-ui/react/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {
  const {login} = useContext(UserContext)

  const [userId,  setUserId]= useState('')

  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    const result = login(+userId);

    if (!result){
      toast.error('Usuario no encontrado')
      return;
    }

    navigation('/profile')
  }
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">LoginPage</h1>
        <hr />

        <form className="flex flex-col gap-2 my-10"
        onSubmit={handleSubmit}
        >
            <Input placeholder="User ID" 
            value ={userId}
            onChange={event => setUserId(event.target.value)}
            />
           

            <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Button>
            <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600">
                Regresar al inicio
            </Link>
        </form>
    </div>
  )
}
