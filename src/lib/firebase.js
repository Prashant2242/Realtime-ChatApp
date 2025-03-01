import { initializeApp } from "firebase/app";
import { createClient } from "@supabase/supabase-js";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Corrected Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-5eadf.firebaseapp.com",
  projectId: "reactchatapp-5eadf",
  storageBucket: "reactchatapp-5eadf.appspot.com",  
  messagingSenderId: "124907794307",
  appId: "1:124907794307:web:7f81ce7f255a6f617f50b6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app); 

// ✅ Initialize Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
