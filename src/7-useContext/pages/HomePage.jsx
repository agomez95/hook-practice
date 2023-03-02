import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomePage = () => {

    const {user} = useContext(UserContext)

    return (
        <>
            <h1>Home Page</h1>
            <hr/>
            <h3>Bienvenido {user?.name}</h3>
        </>
    )
}

/**
 * Igual que con el Login, solo invoque el props del user del Provider con el 'useContext'
 */