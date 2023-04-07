import style from "./SigninForm.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
const SigninForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            console.log(user);
            navigate('/bounty-hunters/login')
        }).catch((error) => {
            console.log(error.code, error.message);
        })
    }

    return (
        <section>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.username}>
                        <label htmlFor="email-adress" >E-mail adress</label>
                        <input type="text" label='email-adress' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email adress"></input>
                    </div>
                    <div className={style.password}>
                        <label htmlFor="password">Password</label>
                        <input type="password" label="Create password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password"></input>
                    </div>
                    {/* <div className={style.password}>
                        <label>Repeat Password</label>
                        <input type="text"></input>
                    </div> */}
                    <div className={style.button}>
                        <button type="submit">Register</button>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default SigninForm