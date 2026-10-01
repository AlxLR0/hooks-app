import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"

export const MemoHook = () => {
    const [title, setTitle] = useState('Mi Titulo')
    const [subTitle, setSubTitle] = useState('Mi Subtitulo')

    const callMyAPI = useCallback(() => {
        console.log('llamando a mi API', subTitle)
    }, [subTitle])

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className= "text-2xl font-thin text-white">
        MemoHook
        </h1>


        <MyTitle title={title}></MyTitle>
        <MySubTitle subTitle={subTitle} callMyAPI={callMyAPI}></MySubTitle>

        <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
         onClick={() => setTitle('Nuevo Titulo') }
        >
          cambiar titulo
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         onClick={() => setSubTitle('Nuevo Subtitulo') }
        >
          cambiar subtitulo
        </button>
    </div>
  )
}
