import { db } from './firebase';
import { onValue, ref, } from 'firebase/database';
import { useState, useEffect } from 'react';

const useData = (key, folder) => {
    const [personalProfile, setPersonalProfile] = useState()
    const [profiles, setProfiles] = useState([])


    useEffect(() => {


        const starCountRef = ref(db, folder);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {

                const newPost = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }))
                setProfiles(newPost)
                setPersonalProfile(...newPost.filter(profile => profile.id === key))
            } else {
                setProfiles([])
                setPersonalProfile()
            }

        })

    }, [folder, key])
    return {
        personalProfile,
        profiles,

    }
}



export default useData