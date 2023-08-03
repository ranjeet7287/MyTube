import React from 'react'
import home from "../Assets/home.svg"
import shotrs from  "../Assets/youtube-shorts-icon.png"
import Subscriptions from  "../Assets/icons8-video-playlist-50.png"
import Library from  "../Assets/icons8-music-library-50 (1).png"
import download from "../Assets/icons8-download-32.png"
import { Link } from 'react-router-dom'

const AsideBar=()=>{
    return(
        <div className='bg-black text-white p-4 h-full fixed flex flex-col items-center gap-16 text-sm w-[5.5rem]'>
            <div><Link to="/"><img className='w-6 cursor-pointer ml-2' src={home}/>Home</Link></div>
            <div><img className='w-6 cursor-pointer ml-2' src={shotrs}/>Shorts</div>
            <div><img className='w-6 ml-7 cursor-pointer' src={Subscriptions}/>Subscriptions</div>
            <div><img className='w-6 ml-1 cursor-pointer' src={Library}/>Library</div>
            <div><img className='w-6 ml-5 cursor-pointer' src={download}/>Downnload</div>
        </div>
    );
}

export default AsideBar;