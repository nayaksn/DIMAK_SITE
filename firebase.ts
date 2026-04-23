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
    console.log('Lead capture initiated:', data);
    const leadData = {
        ...data,
        source: 'DIMAK Corporate',
        timestamp: new Date().toISOString()
    };

    // 1. Start Email Notification (with its own internal catch)
    const emailPromise = sendLeadNotification(leadData)
        .then(res => {
            console.log("Email background process finished:", res);
            return res;
        })
        .catch(err => {
            console.error("Email background process failed:", err);
            return false;
        });

    // 2. Start Firestore Write (entirely in background)
    addDoc(collection(db, "leads"), leadData)
        .then(docRef => console.log("Firestore background write success:", docRef.id))
        .catch(err => console.error("Firestore background write failed:", err));

    // 3. UI Protection: Wait at most 2 seconds for the email to attempt sending
    // before allowing the UI to show 'Success'. This prevents the 'Processing' hang.
    const uiTimeout = new Promise(resolve => setTimeout(() => {
        console.warn("Lead capture UI timeout reached - proceeding to success state");
        resolve({ timeout: true });
    }, 2000));

    try {
        await Promise.race([emailPromise, uiTimeout]);
    } catch (e) {
        console.error("Race condition error:", e);
    }

    // Always return true to unblock the UI and show the success message
    return true;
}
