import style from './HomeHeader.module.css'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase';
import useData from '../../hooks/use-data';

const HomeHeader = () => {
    const [showLogout, setShowLogout] = useState(false)
    const navigate = useNavigate()
    const [key, setKey] = useState()
    const { profiles } = useData(key, 'subscription')
    const { profiles: employeesProfiles } = useData(key, 'employees')
    let countSub = 0;
    let totalCountSub = 0;
    let countEmployees = 0;
    let totalCountEmployees = 0;
    profiles.map(profile => {
        if (profile.owner) {
            totalCountSub--
        }
        if (profile.pay === 'platit') {
            countSub++
        }
        return totalCountSub++
    })
    employeesProfiles.map(profile => {
        if (profile.owner) {
            totalCountEmployees--
        }
        if (profile.hire === 'angajat') {
            countEmployees++
        }
        return totalCountEmployees++
    })
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setKey(user.uid)
                setShowLogout(true)

            } else {
                setShowLogout(false)

            }
        });
    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/bounty-hunters");
        }).catch((error) => {

        });
    }


    return (
        <>
            <header className={style.header}>
                <Link to="/bounty-hunters" className={style.logo}>BountyHunters</Link>
                <div className={style.count}>
                    <div>Employees: {countEmployees}/{totalCountEmployees}</div>
                    <div> Subscribers: {countSub}/{totalCountSub}</div>


                </div>
                <nav className={style.navigation}>
                    <ul className={style.content}>
                        <li>
                            <Link to="/bounty-hunters/hiring">Hiring</Link>
                            <Link to='/bounty-hunters/about'>About</Link>
                            <Link to='/bounty-hunters/cars'>Cars</Link>
                            <Link to='/bounty-hunters/carsforsale'>For Sale</Link>
                            <Link to='/bounty-hunters/subscription'>Subscription</Link>
                            <Link to='/bounty-hunters/contact'>Contact</Link>
                            {showLogout ? <Link to='/bounty-hunters/profile'>Profile</Link> : ''}
                            {showLogout ? <Link onClick={handleLogout}>Sign out</Link> : <Link to='/bounty-hunters/signin'>Sign in</Link>}
                        </li>
                    </ul>
                    <div className={style.menuBtn}>
                        <ul>
                            <li>
                                <Link to='/bounty-hunters'> Menu</Link>
                                <ul >
                                    <li><Link to="/bounty-hunters/hiring">Hiring</Link></li>
                                    <li><Link to='/bounty-hunters/about'>About</Link></li>
                                    <li><Link to='/bounty-hunters/cars'>Cars</Link>
                                        <ul>
                                            <li>
                                                <Link to='/bounty-hunters/carsforsale'>For Sale</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to='/bounty-hunters/subscription'>Subscription</Link></li>
                                    <li><Link to='/bounty-hunters/contact'>Contact</Link></li>
                                    {showLogout ? <li> <Link to='/bounty-hunters/profile'>Profile</Link></li> : ''}
                                    {showLogout ? <Link onClick={handleLogout}>Sign out</Link> : <Link to='/bounty-hunters/signin'>Login</Link>}
                                </ul>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default HomeHeader