import style from "./LoginForm.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            navigate('/bounty-hunters/home')
            console.log(user);
        }).catch((error) => {
            console.log(error.code, error.message);
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
                    <div className={style.button}>
                        <button type="submit">Login</button>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginForm