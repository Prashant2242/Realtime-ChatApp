import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import Chat from './components/chat/Chat';
import Details from './components/details/Details';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
import { useEffect } from 'react';
import { auth, db } from "./lib/firebase"; 
import { useUserStore } from './lib/userStore';

const App = () => {

 const {currentUser,isLoading,fetchUserInfo}=useUserStore();

 useEffect(() => {
  const unSub = onAuthStateChanged(auth, (user) => {
    if (user && user.uid) {
      fetchUserInfo(user.uid);
    } else {
      fetchUserInfo(null);
    }
  });

  return () => {
    unSub();
  };
}, [fetchUserInfo]);
    
    console.log(currentUser);

    if(isLoading) 
    return
    <div className='Loading'>Loading...</div>

  return (
    <div className='Container'>
        { currentUser ?
         (
           <>
            <List/>
            <Chat/>
            <Details/>
           </>
         ):(
           <Login/>
         ) 
        }
        <Notification/>

    </div>
  )
}

export default App;