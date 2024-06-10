import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { useState } from "react";
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

// const fetchData = (db, path) => {
//   return new Promise((resolve, reject) => {
//     onValue(ref(db, path), (snapshot) => {
//       const result = snapshot.val();
//       resolve(result);
//     }, (error) => {
//       reject(error);
//     });
//   });
// }
// export const Getdb = async (path) => {
//   try {
//     const resultNew = await fetchData(db, path);
//     console.log('Updated resultNew:', resultNew);
//     return resultNew;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }
export const fetchData = (db, path) => {
  return new Promise((resolve, reject) => {
    onValue(ref(db, path), (snapshot) => {
      // console.log(path);
      const result = snapshot.val();
      // console.log(snapshot.val());
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
export const Getdb = async (path) => {
  try {
    const resultNew = await fetchData(db, path);
    // console.log('Updated resultNew:', resultNew);
    return resultNew;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Đảm bảo lỗi được xử lý bên ngoài
  }
}
// export const GetdbLogin = async (path) => {
//   onValue(ref(db, `company?password='123456'`), (snapshot) => {
//     console.log(snapshot.val());
//     snapshot.forEach((childsnapshot) => {
//       const chilData = childsnapshot.val();
//       console.log(chilData);
//     });
//   });

// }

const API_DOMAIN = "http://localhost:3002/";

export const get1 = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, options);
  const result = await response.json();
  return result;
};

export const post = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};

export const patch = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};