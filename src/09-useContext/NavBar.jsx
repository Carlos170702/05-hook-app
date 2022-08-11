import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <NavLink
                                className={({ isActive }) => {
                                    return `nav-link ${isActive ? 'active' : ''}`
                                }}
                                to={'/'}>
                                Home
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => {
                                    return `nav-link ${isActive ? 'active' : ''}`
                                }}
                                to={'/Login'}
                            >
                                Login
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => {
                                    return `nav-link ${isActive ? 'active' : ''}`
                                }}
                                to={'/About'}
                            >
                                About
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
