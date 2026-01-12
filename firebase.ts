import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { sendLeadNotification } from "./src/utils/email";

// Firebase configuration using the shared project
const firebaseConfig = {
    apiKey: "AIzaSyBDoScWA2X7DGpAaswl2w52z5isNKjfbz8",
    authDomain: "dimak-1b709.firebaseapp.com",
    projectId: "dimak-1b709",
    storageBucket: "dimak-1b709.firebasestorage.app",
    messagingSenderId: "193571394744",
    appId: "1:193571394744:web:100a239e2c0b4d1024904d",
    measurementId: "G-HEPYX6E5W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export async function saveLead(data: any) {
    console.log('Saving lead to Firebase (DIMAK):', data);
    try {
        const leadData = {
            ...data,
            source: 'DIMAK Corporate',
            timestamp: new Date().toISOString()
        };
        const docRef = await addDoc(collection(db, "leads"), leadData);
        console.log("Lead document written with ID: ", docRef.id);

        // Trigger email notification
        sendLeadNotification(leadData).catch(err => console.error("Email notification failed:", err));

        return docRef.id;
    } catch (e) {
        console.error("Error adding lead: ", e);
        throw e;
    }
}
