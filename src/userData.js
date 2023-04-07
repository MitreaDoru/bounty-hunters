import { db } from './firebase';
import { ref, set, remove } from 'firebase/database';

function updateDataEmployees(key, nume, prenume, cod, luni, telefon, masina, hired) {
    set(ref(db, 'employees/' + key), {
        id: key,
        nume: nume,
        prenume: prenume,
        CNP: cod,
        luni: luni,
        telefon: telefon,
        masina: masina,
        hire: hired
    });
}

function updateDataSubscription(key, carNumber, uniqueCode, date, expirationDate, hour, payed) {
    set(ref(db, 'subscription/' + key), {
        id: key,
        carNumber,
        uniqueCode,
        date,
        expirationDate,
        hour,
        pay: payed
    });
}

function removeData(key, folder) {
    remove(ref(db, folder + key));
}

const userData = {
    updateDataEmployees,
    updateDataSubscription,
    removeData
}

export default userData