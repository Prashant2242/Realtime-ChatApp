import './Chat.css';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
const Chat=()=>{

    const [open, setOpen]=useState(false);
    const [text,setText]=useState("");

    const endRef=useRef(null);
    
    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior:"smooth"});
    },[]);


    const handleEmoji =(e)=>{
        setText((prev)=>prev+e.emoji);
        setOpen(false)
    };

    return(
        <div className="chat">
            <div className='top'>
                <div className='user'>
                    <img src='./avatar.png' alt=""/>
                    <div className='texts'>
                        <span>Prashant Bhatt</span>
                        <p>hello guys it's me prashant</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src='./phone.png' alt=""/>
                    <img src='./video.png' alt=""/>
                    <img src='./info.png' alt=""/>
                </div>

            </div>

            <div className='center'>
                <div className='message'>
                    <img src='./avatar.png' alt=""/>
                    <div className='text'>
                        <p>hello brother how are you everything is fine in ewhic smenester you are currently</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className='message own'>
                    <div className='text'>
                        <img src='https://m.economictimes.com/thumb/msid-75201770,width-1600,height-900,resizemode-4,imgsize-212710/adventures-of-chhota-bheem-and-his-friends-will-be-aired-on-dd-national-every-afternoon-at-2-pm-.jpg' alt=''/>
                        <p>hello brother how are you , what are you doing is everything is fine</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className='message'>
                    <img src='./avatar.png' alt=""/>
                    <div className='text'>
                        <p>hello brother how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className='message own'>
                    <div className='text'>
                        <p>hello brother how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div className='message'>
                    <img src='./avatar.png' alt=""/>
                    <div className='text'>
                        <p>hello brother how are you</p>
                        <span>1 min ago</span>
                    </div>

                </div>
                <div ref={endRef}></div>
            </div>

            <div className='bottom'>
                <div className='icons'>
                  <img src='./img.png' alt=""/>
                  <img src='./camera.png' alt=""/>
                  <img src='./mic.png' alt=""/>
                </div>
                <input type="text" placeholder='Type a message..'
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
                <div className='emoji'>
                    <img src='./emoji.png' alt="" 
                    onClick={()=>setOpen((prev)=>!prev)}/>

                 <div className='Emoji-Picker'>
                <EmojiPicker open={open}  onEmojiClick={handleEmoji}/>  
                </div>
                </div>
               
                
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}
export default Chat;