import style from './HiringContent.module.css'
import service from '../img/hiring.jpg'
import { useEffect, useState } from 'react';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { db } from '../firebase'
import { ref, set, } from 'firebase/database'
import useData from '../hooks/use-data';

const HiringContent = () => {

    const [nume, setNume] = useState('')
    const [prenume, setPrenume] = useState('')
    const [cod, setCod] = useState('')
    const [luni, setLuni] = useState('')
    const [telefon, setTelefon] = useState('')
    const [masina, setMasina] = useState('')
    const [key, setKey] = useState()
    const { personalProfile } = useData(key, 'employees')

    const dataAddOn = (e) => {
        e.preventDefault()
        set(ref(db, 'employees/' + key), {
            nume: nume,
            prenume: prenume,
            CNP: cod,
            luni: luni,
            telefon: telefon,
            masina: masina,
            hire: 'neangajat',
            owner: ''
        });
        setNume('')
        setPrenume('')
        setCod('')
        setLuni('')
        setTelefon('')
        setMasina('')
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setKey(user.uid)

            }
        });
    }, [])





    return (
        <div className={style.hiring}>
            <div className={style.image}>

                <img src={service} alt='interior-service' width='1915' height='956' />
            </div>
            <div className={style.content}>
                <h3>Vrei sa te angajezi</h3>
                <p>
                    Daca doresti sa ni te alaturi ca Mecanic, ai nevoie de 100 de luni in oras.
                </p>
                <p>
                    Daca doresti sa ni te alaturi ca Ajutor-Mecanic, ai nevoie de 50 de luni in oras.
                </p>
                <p>
                    Daca esti pasionat de masini si pur si simplu vrei sa petreci niste timp de calitate cu oameni de calitate, te asteptam in vizita!</p>
            </div>
            {key && <form onSubmit={dataAddOn} className={style.description}>
                <label htmlFor='nume'>Nume</label>
                <input type='text' name='nume' placeholder='Nume' value={nume} onChange={(e) => setNume(e.target.value)} required />
                <label htmlFor='prenume'>Prenume</label>
                <input type='text' name='prenume' placeholder='Prenume' value={prenume} onChange={(e) => setPrenume(e.target.value)} required />
                <label htmlFor='CNP'>CNP</label>
                <input type='number' name='CNP' placeholder='CNP' value={cod} onChange={(e) => setCod(e.target.value)} required />
                <label htmlFor='luni'>Numar de luni</label>
                <input type='number' name='luni' placeholder='Luni' value={luni} onChange={(e) => setLuni(e.target.value)} required />
                <label htmlFor='telefon'>Numar de telefon</label>
                <input type='text' name='telefon' placeholder='Telefon' value={telefon} onChange={(e) => setTelefon(e.target.value)} required />
                <label htmlFor='masina'>Masina de drift</label>
                <input type='text' name='masina' placeholder='Masina' value={masina} onChange={(e) => setMasina(e.target.value)} required />
                {personalProfile && <p>Se reseteaza datele daca dai iar submit la alte date</p>}
                <button type='submit'>Submit</button>
            </form>}
        </div >
    )
}

export default HiringContent