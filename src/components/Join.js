import React from "react";
import '../Join.css'
import { getDatabase, ref, push,set } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// const firebase = require('firebase');
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUOaMM6jSJSpv2s6ui3dJyrDeWUvSrkIU",
    authDomain: "missionchaitanya-ede4c.firebaseapp.com",
    databaseURL: "https://missionchaitanya-ede4c-default-rtdb.firebaseio.com",
    projectId: "missionchaitanya-ede4c",
    storageBucket: "missionchaitanya-ede4c.appspot.com",
    messagingSenderId: "508860939618",
    appId: "1:508860939618:web:2537fdbbf939eeba3d403b",
    measurementId: "G-GTH9NQ3XYT"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getDatabase();
const messagesRef = ref(db, "messages");

export default function Join() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const phoneno = document.getElementById('phoneno').value;
        const age = document.getElementById('age').value;
        // console.log(email + " " + name + " " + phoneno + " " + age)
        push(messagesRef, {
            name: name,
            email: email,
            age: age,
            phoneno: phoneno
        }).then(() => {
            alert("Thank you for joining");
            console.log('Data saved successfully.');
            document.getElementById('email').value = "";
            document.getElementById('name').value = "";
            document.getElementById('phoneno').value = "";
            document.getElementById('age').value = "";

        }).catch((error) => {
            console.log('Data could not be saved:', error);
        });


        // if sucessfull

        // form.reset();
        // Do something when the form is submitted

    }






    return (

        <div className='join' >


            <form className="join-form" onSubmit={handleSubmit} method="post">
                <div className="form-outline mb-4 ">
                    <input type="text" id="name" name="name" className="form-control" required placeholder="Full Name" />

                </div>
                <div className="form-outline mb-4 ">
                    <input type="email" id="email" name="email" className="form-control" required placeholder="Email" />

                </div>
                <div className="form-outline mb-4">
                    <input type="tel" id="phoneno" name="phoneno" className="form-control" required placeholder="Mobile Number" />

                </div>
                <div className="form-outline mb-4">
                    <input type="number" id="age" name="age" className="form-control" required placeholder="Age" />

                </div>





                <button type="sumbit" className="btn btn-primary btn-block mb-4"  >Join Us</button>
                <p> Once you Submit the form you we will to added to our community Slack</p>


            </form>
        </div>);
}
