import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav >
            <NavLink to="/">
                <h3 className='logo'>The Gipsy Spinach</h3>
            </NavLink>
        </nav>
    )
}
