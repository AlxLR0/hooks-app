import { Button } from "@/components/ui/button"

export const ProfilePage = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold">Profile Page</h1>
        <hr />

        <pre>{JSON.stringify({}, null, 2)}</pre>

        <Button variant="destructive">Salir</Button>
    </div>
  )
}
