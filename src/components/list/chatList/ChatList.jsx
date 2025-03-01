import './ChatList.css';
import { useEffect, useState } from 'react';
import AddUser from './addUser/AddUser';
import { useUserStore } from '../../../lib/userStore';
import { doc,getDoc, onSnapshot } from 'firebase/firestore';
import { db } from "../../../lib/firebase";


const ChatList=()=>{
    const [chats, setChats]=useState([]);
    const [addMode,setAddMode]=useState(false);
   

    const {currentUser}=useUserStore();

    //here i am fetching the real time data
    useEffect(()=>{
        const unsub=onSnapshot(doc(db,"userchats",currentUser.id),async (res)=>{
           const items=res.data().chats;

          //setChats(res.data().chats);
          const promises=items.map(async(item)=>{
              const userDocRef=doc(db,"users",item.receiverId);
              const userDocSnap=await getDoc(userDocRef);

              const user=userDocSnap.data();

              return {...item,user};
          });
          const chatData=await Promise.all(promises)

          setChats(chatData.sort((a,b)=>b.updatedAt - a.updatedAt));
        });

        return ()=>{
            unsub();
        }
    },[currentUser.id]);  //whenever our current user id changes its going to render again
    console.log(chats);
 

    return(
        <div className='chatList'>
            <div className='search'>
                <div className='searchBar'>
                    <img src='./search.png' alt=""/>
                    <input type="text" placeholder='Search'/>
                </div>
                <img className='plus-btn' src={addMode ? "./minus.png" : "./plus.png"} alt="" 
                onClick={()=>setAddMode((prev)=>!prev)}/>
            </div>

            {chats.map((chat)=>(
                <div className='item' key={chat.chatId} >
                <img src='./avatar.png' alt=""/>
                <div className='texts'>
                    <span>prash</span>
                    <p>{chat.lastMessage}</p>
               </div>
            </div>
            ))}
            
           
           {addMode && <AddUser/>} 
        </div>
    )
}

export default ChatList; 