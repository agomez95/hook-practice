import { memo } from "react"

export const Small = memo(({value}) => {

    console.log('Impresion')

    return (
        <div>{value}</div>
    )
})
