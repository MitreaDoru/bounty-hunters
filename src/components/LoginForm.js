import style from "./LoginForm.module.css"
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const authUser = getAuth();
            const emailVerified = authUser.currentUser.emailVerified;
            if (emailVerified) {

                navigate('/bounty-hunters/home')
                setError(false)
            } else {
                auth.signOut()
                navigate('/bounty-hunters/login')
                alert('Verify your email')
            }
        }).catch((error) => {
            setError(true)
        })

    }

    return (
        <section>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.username}>
                        <label htmlFor="email-adress">Email adress</label>
                        <input type="email" required id="email-adress" name="email" placeholder="Email adress" onChange={(e) => setEmail(e.target.value)}  ></input>
                    </div>
                    <div className={style.password}>
                        <label htmlFor="password">Password</label>
                        <input type="password" required id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    {error && <p>Wrong email or password</p>}
                    <div className={style.button}>
                        <Link to='/bounty-hunters/home'>Continue offline</Link>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginForm