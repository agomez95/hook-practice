import { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id:1,
//     name: 'Adrian Gomez',
//     email: 'adrian@gmail.com'
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

/**
 * Basicamente el Provider sera una forma de almacenar los componentes hijos, por ejemplo si se fijan en el MainApp estos estan dentro del UserProvider y estos
 * al ser sus hijos tendran todo los props que definamos aqui como por ejemplo el user y el hola dentro de los componentes Nav, Home, About y Login
 * Para ver esto fijense los componentes nombrados con anterioridad
 * Ahora hare mas interesante esta huevada haciendo un State para mandarlo como prop y desde el LOGIN se pueda establecer el prop mediante un evento onClick
 */