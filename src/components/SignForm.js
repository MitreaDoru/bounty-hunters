import style from "./SigninForm.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { getAuth, sendEmailVerification } from "firebase/auth";

import useForm from "../use-form";
const SigninForm = () => {
    const [dbError, setDbError] = useState(false)
    const navigate = useNavigate();





    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailIsInvalid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlur,
        resetInputHandler: emailReset,
    } = useForm((value) => value.includes("@"));

    const {
        value: enteredPassword,
        isValid: passwordIsValid,
        hasError: passwordIsInvalid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordInputBlur,
        resetInputHandler: passwordReset,
    } = useForm((value) => value.length >= 7);


    let formIsValid = false;
    if (emailIsValid && passwordIsValid) {
        formIsValid = true
    }

    const emailStyle = emailIsInvalid ? `${style.email} ${style.invalid}` : style.email;
    const passwordStyle = passwordIsInvalid ? `${style.password} ${style.invalid}` : style.password
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!emailIsValid && !passwordIsValid) {
            return
        }
        try {

            await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword).then((userCredential) => {

                const authUser = getAuth();
                sendEmailVerification(authUser.currentUser)
                    .then((user) => {

                        alert("Verification email sent")
                    });
                navigate('/bounty-hunters/login')
                emailReset()
                passwordReset()
                setDbError(false)
            }).catch((error) => {
                setDbError(true)
            })
        } catch (error) {
            console.log(error);
            setDbError(true)
        }
    }



    return (
        <section>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.username}>
                        <label htmlFor="email-adress" >E-mail adress</label>
                        <input type="text" label='email-adress' onBlur={emailInputBlur} value={enteredEmail} onChange={emailChangeHandler} required placeholder="Email adress" className={emailStyle}></input>
                        {(emailIsInvalid || dbError) && <p>Wrong format</p>}
                    </div>
                    <div className={style.password}>
                        <label htmlFor="password">Password</label>
                        <input type="password" label="Create password" onBlur={passwordInputBlur} value={enteredPassword} onChange={passwordChangeHandler} required placeholder="Password" className={passwordStyle}></input>
                        {passwordIsInvalid && <p>Try to use a long password</p>}
                    </div>
                    {/* <div className={style.password}>
                        <label>Repeat Password</label>
                        <input type="text"></input>
                    </div> */}

                    <div className={style.button}>
                        <button disabled={!formIsValid} type="submit">Sign up</button>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default SigninForm