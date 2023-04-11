import style from './AuthHeader.module.css'
import { Link, Outlet } from 'react-router-dom'
const AuthHeader = () => {
    return (
        <>
            <header className={style.header}>
                <nav className={style.navigation}>
                    <ul className={style.content}>
                        <li>
                            <Link to="/bounty-hunters/signin">Sign in</Link>
                        </li>
                        <li>
                            <Link to='/bounty-hunters/signup'>Sign up</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default AuthHeader