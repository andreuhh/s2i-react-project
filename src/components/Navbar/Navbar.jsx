import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav >
            <NavLink to="/">
                <h2 className='logo'>The Gipsy Spinach</h2>
            </NavLink>
        </nav>
    )
}
