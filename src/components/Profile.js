import style from './Profile.module.css'
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';


import useData from '../use-data';
import userData from '../userData';



// import { onValue, ref, set, remove } from 'firebase/database';
// import getEmployees from '../getUid';
// const newPost = getEmployees.add('employees')
// setProfiles(newPost)
// setPersonalProfile(...newPost.filter(profile => profile.id === key))

const Profile = () => {

    const [key, setKey] = useState()

    const { personalProfile, profiles } = useData(key, 'employees')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setKey(user.uid)
            }
        });
    }, [])

    const allProfiles = profiles.map(profile => {
        return (
            <div key={profile.id} className={style.content}>

                <p>Nume: {profile ? profile.nume : ''}</p>
                <p>Prenume: {profile ? profile.prenume : ''}</p>
                <p>Telefon: {profile ? profile.telefon : ''}</p>
                <p>CNP: {profile ? profile.CNP : ''}</p>
                <p>Luni: {profile ? profile.luni : ''}</p>
                <p>Masina: {profile ? profile.masina : ''}</p>
                <p>Angajat: {profile ? profile.hire : ''}</p>
                <button onClick={() => { userData.removeData(profile.id, 'employees/') }}>Delete</button>
                <button onClick={() => { userData.updateDataEmployees(profile.id, profile.nume, profile.prenume, profile.CNP, profile.luni, profile.telefon, profile.masina, 'angajat') }}>Angajeaza</button>
            </div>
        )
    })


    return (
        <div className={style.profile}>
            {personalProfile.owner ? '' : <div className={style.content}>

                <p>Nume: {personalProfile ? personalProfile.nume : ''}</p>
                <p>Prenume: {personalProfile ? personalProfile.prenume : ''}</p>
                <p>Telefon: {personalProfile ? personalProfile.telefon : ''}</p>
                <p>CNP: {personalProfile ? personalProfile.CNP : ''}</p>
                <p>Luni: {personalProfile ? personalProfile.luni : ''}</p>
                <p>Masina: {personalProfile ? personalProfile.masina : ''}</p>
                <p>Angajat: {personalProfile ? personalProfile.hire : ''}</p>
            </div>}
            <div className={style.grid}>

                {personalProfile.owner ? allProfiles : ''}
            </div>

        </div>
    )
}

export default Profile