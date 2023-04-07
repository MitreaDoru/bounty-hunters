import style from './Subscription.module.css'
import subscription from '../img/subscription.jpg'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import useData from '../use-data'
import userData from '../userData'
import { db } from '../firebase'
import { ref, set, } from 'firebase/database'
const Subscription = () => {

    const [key, setKey] = useState()
    const [carNumber, setCarNumber] = useState('')
    const [uniqueCode, setUniqueCode] = useState('')
    const [date, setDate] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [hour, setHour] = useState('')
    const { personalProfile, profiles } = useData(key, 'subscription')
    const { personalProfile: personalProfileEmployee } = useData(key, 'employees')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setKey(user.uid)
            }
        });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        set(ref(db, 'subscription/' + key), {
            carNumber,
            uniqueCode,
            date,
            expirationDate,
            hour,
            pay: ''
        });
        setCarNumber('')
        setUniqueCode('')
        setDate('')
        setExpirationDate('')
        setHour('')
    }

    const subscriptions = profiles.map(profile => {
        return (
            <div key={profile.id} className={style.content}>
                <p>Numar masina: {profile ? profile.carNumber : ''}</p>
                <p>CNP: {profile ? profile.uniqueCode : ''}</p>
                <p>Ora: {profile ? profile.hour : ''}</p>
                <p>Data: {profile ? profile.date : ''}</p>
                <p>Data expirare: {profile ? profile.expirationDate : ''}</p>
                <p>Pay: {profile ? profile.pay : ''}</p>
                <button onClick={() => { userData.removeData(profile.id, 'subscription/') }}>Delete</button>
                <button onClick={() => { alert('Are you sure'); userData.updateDataSubscription(profile.id, profile.carNumber, profile.uniqueCode, profile.date, profile.expirationDate, profile.hour, 'platit') }}>Platit</button>
            </div>
        )

    })

    const personalSubscription =
        personalProfile && <div>
            <p>Numar masina: {personalProfile ? personalProfile.carNumber : ''}</p>
            <p>CNP: {personalProfile ? personalProfile.uniqueCode : ''}</p>
            <p>Ora: {personalProfile ? personalProfile.hour : ''}</p>
            <p>Data incepere: {personalProfile ? personalProfile.date : ''}</p>
            <p>Data expirare: {personalProfile ? personalProfile.expirationDate : ''}</p>
            <p>Plata: {personalProfile ? personalProfile.pay : ''}</p>
        </div>

    const personalInputSubscription = <form onSubmit={handleSubmit} className={style.info}>
        <label htmlFor='numar-masina'>Numar masina</label>
        <input type='text' nume='numar-masina' value={carNumber} placeholder='LS XXXXX' onChange={(e) => setCarNumber(e.target.value)}></input>
        <label htmlFor='cnp'>CNP</label>
        <input type='text' nume='cnp' placeholder='CNP/IBAN' value={uniqueCode} onChange={(e) => setUniqueCode(e.target.value)} ></input>
        <label htmlFor='Hour'>Ora</label>
        <input type='hour' name='hour' placeholder='Ora curenta' value={hour} onChange={(e) => setHour(e.target.value)} ></input>
        <label htmlFor='date'>Data curenta</label>
        <input type='date' name='date' value={date} onChange={(e) => setDate(e.target.value)} ></input>
        <label htmlFor='date'>Data Expirare</label>
        <input type='date' name='date' value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} ></input>
        <button type='submit'>Submit</button>
    </form>


    return (
        <div className={style.subscription}>
            <div className={style.title}>
                <img src={subscription} alt='toyota-MR2' width='1920' height='970' />
            </div>
            <div className={style.description}>
                <h3>Subscription</h3>
                <p>Abonamentul este in valoare de 15.000$ pe saptamana</p>
                <p>Mecanic personal la service (Expres) Acces la toate evenimentele noastre sa vizionati fara sa platiti intrare (Exceptie daca vreti sa participati).</p>
                <p> Puteti imprumuta masinile noastre sa va dati pe traseul nostru daca nu detineti o masina suficient de puternica.</p>
            </div>
            {key && personalInputSubscription}
            {personalProfileEmployee && (personalProfileEmployee.hire === 'angajat' || personalProfileEmployee.owner ? '' : personalSubscription)}
            {!personalProfileEmployee && (personalProfile ? personalSubscription : '')}
            <div className={style.grid}>

                {personalProfileEmployee && (personalProfileEmployee.hire === 'angajat' || personalProfileEmployee.owner ? subscriptions : '')}
            </div>
        </div>
    )
}

export default Subscription