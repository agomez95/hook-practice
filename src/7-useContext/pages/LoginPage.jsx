import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <h1>Login Page</h1>
            <hr/>
            <p>
                correo: {user?.email}
                <br />
                usuario: {user?.name}
            </p>
            <button className="btn btn-primary" onClick={() => setUser({id: 1, name: 'Adrian Gomez', email: 'adrian@gmail.com'})}>Establecer usuario</button>
        </>
    )
}

/**
 * Como lo mencione en el UserProvider, se puede invocar todos los props que se definan ahí aqui porque esto se vuelve un componente hijo y es mas facil de usar con
 * el 'useContext'
 * Ahora que estoy mandando el dispatch del setUser esto establecera un usuario mediante un click, si uno se fija en este componente o en el Home se define el user con ?
 * para que no imprima hasta que exista con el setUser del boton
 */