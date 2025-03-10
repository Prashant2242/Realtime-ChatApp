import { getDoc,doc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from "./firebase"; 


 export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading:true,
  fetchUserInfo:async (uid)=>  {
      if(!uid) 
      return set({currentUser:null,isLoading:false});

      try{
        console.log("Fetching user data for UID:", uid);
          const docRef=doc(db,"users",uid);
          const docSnap=await getDoc(docRef);

          if(docSnap.exists()){
           set({currentUser:docSnap.data(), isLoading:false})
          }else{
            set({currentUser:null,isLoading:false})
          }

      }catch(err){
         console.log(err)
         return set({currentUser:null,isLoading:false});
      }
  }
}))
