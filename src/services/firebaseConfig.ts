import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAjpY6Ik6C0q6YH-rr3CVXbKyg3StyBQQw",
	authDomain: "lista-atendimento.firebaseapp.com",
	projectId: "lista-atendimento",
	storageBucket: "lista-atendimento.appspot.com",
	messagingSenderId: "375176022395",
	appId: "1:375176022395:web:84a28b6926cbea5c94d5de",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
