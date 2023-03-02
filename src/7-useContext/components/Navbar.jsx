import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">useContext</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink to="/" className={'nav-link'}>Home</NavLink>

                            <NavLink to="/about" className={'nav-link'}>About</NavLink>

                            <NavLink to="/login" className={'nav-link'}>Login</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>    
    )
}

/**
 * El uso del Link en lugar de <a> hace que no hay refresh de la pagina, sino que simplemente se cambie el componente especificado en las rutas(Link sigue siendo un a pero mas sofisticado)
 * El NavLink remplaza a el li y el link dandole una unica etiqueta que si funciona pero hay que igual establecer el classname del Link
 */
