import React from "react"

interface Props{
    title: string
}

export const MyTitle = React.memo(({ title }: Props) => {
  return (
    <h1 className="text-2xl font-bold text-white">{title}</h1>
  )
});
