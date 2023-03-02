import { createContext } from "react"

export const UserContext = createContext()

/*
*   Este es un high order componente por lo que se tiene que definir como si se tratase de un componente y/o pagina
*   Esto hara mas facil el transito de propiedades o data y el uso en los padres e hijos, ejemplo: si creo un carrito de compras lo almacenara aqui proveniente del padre
    y esto sera invocable como si se tratase de un archivo de barril en los componentes hijos cuando estos lo requieran
*   Para que esto funcione como describi lo que uno debe hacer es crear un provider donde maneje dicha informacion y que 
    con ese provider se trabaje en las rutas implicadas
*/