import './Details.css';
import { auth } from '../../lib/firebase';

const Details=()=>{
    return(
        <div className='detail'>
            <div className='user'>
                <img src='./avatar.png ' alt=""/>
                <h2>Prashant</h2>
                <p>Hello,how are you</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Chat Settings</span>
                        <img src='./arrowUp.png' alt=""/> 
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Privacy and
                          Help</span>
                        <img src='./arrowUp.png' alt=""/>
                        
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Photos</span>
                        <img src='./arrowUp.png' alt=""/>
                     </div>
                     <div className='photos'></div>
                  
                        <img src='/.download.png' alt=""/>
                    </div>
                    
                <div className='option'>
                   
                    <div className='photos'>
                        <div className='photoItem'>
                            <div className='photoDetails'>
                                <img src='https://www.shutterstock.com/image-illustration/3d-small-people-jumped-pleasure-260nw-67359301.jpg' alt=""/>
                            <span>photos2025.png</span>
                            </div>
                            <img src="./download.png" alt=''/>
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetails'>
                                <img src='https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg' alt=""/>
                            <span>photos2025.png</span>
                            </div>
                            <img src="./download.png" alt=''/>
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetails'>
                                <img src='https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg' alt=""/>
                            <span>photos2025.png</span>
                            </div>
                            <img src="./download.png" alt=''/>
                        </div>
                        <div className='title'>
                        <span>Shared files</span>
                        <img src='./arrowUp.png' alt=""/>
                    </div>
                    </div>
                    
                </div>
                <button className='Block-btn'>Block User</button>
                <button className='logout-btn' onClick={()=>auth.signOut}>Logout</button>
            </div>
          
        </div>
    )
}

export default Details; 