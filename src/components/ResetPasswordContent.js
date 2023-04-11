import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './ResetPasswordContent.module.css'

const ResetPasswordContent = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth()
        sendPasswordResetEmail(auth, email).then(() => {
            alert('Check email for password reset')
            setEmail('')
            navigate('/bounty-hunters/signin')
            setError(false)
        }).catch((error) => {
            setError(true)
        })
    }


    return (
        <section>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.email}>
                        <label htmlFor="email-adress">Email adress</label>
                        <input type="email" id="email-adress" value={email} name="email" placeholder="Email adress" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    {error && <p>Sorry, can't find this email!</p>}
                    <div className={style.button}>
                        <button disabled={!email} type="submit">Reset</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ResetPasswordContent