import style from './AuthHeader.module.css'
import { Link, Outlet } from 'react-router-dom'
const AuthHeader = () => {
    return (
        <>
            <header className={style.header}>
                <nav className={style.navigation}>
                    <ul className={style.content}>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to='/signin'>Signin</Link>

                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default AuthHeader