import { memo } from "react";

interface Props{
    subTitle: string

    callMyAPI: () => void;
}

export const MySubTitle = memo(({ subTitle, callMyAPI }: Props) => {
  return (
    <>
    
    <h6 className="text-lg font-semibold text-white">{subTitle}</h6>
    
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
     onClick={callMyAPI}>
      Llamar a funcion
    </button>
    </>
  )
});
