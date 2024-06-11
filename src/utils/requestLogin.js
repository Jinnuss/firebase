import { getDatabase, ref, query, orderByChild, equalTo, onValue, set } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyB88BeRVrPXOopcvNfeBjB17BsHdQzYe58",
    authDomain: "cdtn-3082b.firebaseapp.com",
    databaseURL: "https://cdtn-3082b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cdtn-3082b",
    storageBucket: "cdtn-3082b.appspot.com",
    messagingSenderId: "630084049894",
    appId: "1:630084049894:web:d64dbd1fff15e1e0c3d427",
    measurementId: "G-PWTVLTH38W"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

export const fetchData = (db, path, childKey, value) => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, path);
        const dbQuery = query(dbRef, orderByChild(childKey), equalTo(value));

        onValue(dbQuery, (snapshot) => {
            const result = snapshot.val();
            if (result !== null) {
                resolve(result);
            } else {
                reject(new Error("No data found"));
            }
        }, (error) => {
            reject(error);
        });
    });
}

export const GetdbLogin = async (path, childKey, value) => {
    try {
        const resultNew = await fetchData(db, path, childKey, value);
        console.log(resultNew);
        return resultNew;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Đảm bảo lỗi được xử lý bên ngoài
    }
}

export const PostDBRegister = async (path, values) => {
    const id = Date.now();
    const token1 = Date.now();
    console.log(path);
    try {
        await set(ref(db, 'company/' + id), {
            id: id,
            companyName: values.companyName,
            email: values.email,
            phone: values.phone,
            password: values.password,
            token: `${token1}`,
            address: 'Địa chỉ công ty',
            description: 'Miêu tả công ty',
            detail: 'Chi tiết công ty',
            quantityPeople: 90,
            website: 'Link website công ty',
            workingTime: 'Thời gian làm việc',
        });
        console.log('Data saved successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
    }
}