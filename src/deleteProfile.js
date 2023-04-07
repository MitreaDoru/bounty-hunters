// let profile;
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase';

async function profile(key, folder) {
    await deleteDoc(doc(db, folder, key))
};
const deleteProfile = {
    profile
}

export default deleteProfile