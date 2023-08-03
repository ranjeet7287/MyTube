import home from "../Assets/home.svg"
import shotrs from  "../Assets/youtube-shorts-icon.png"
import Subscriptions from  "../Assets/icons8-video-playlist-50.png"
import Library from  "../Assets/icons8-music-library-50 (1).png"
import download from "../Assets/icons8-download-32.png"
import sidebar from "../Assets/menubtn1.svg"
import youtbeicon from "../Assets/youtube.svg"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toggleSideBar } from "../utils/AppSlice"
import store from "../utils/Store"

const SideBar=()=>{

    const isSideBarVisible=useSelector(store =>store.app.isSideBar)

    const dispatch=useDispatch();
    const toggleHandler=()=>{
        dispatch(toggleSideBar());
    }

    if(!isSideBarVisible) return null;
    return(
        <div className='SideBar'>
            <div className="flex gap-4 items-center p-4">
                <img className="w-8" src={sidebar} onClick={()=>toggleHandler()}/>
                <p className="text-2xl">YouTube<sup className="text-gray-300 text-sm">IN</sup></p>
            </div>
        <div>
            <ul className='text-xl p-2'>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg '>Home</li>
                <li className='p-2  hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Shorts</li>
                <li className='p-2  hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Subscriptions</li>
            </ul>
        </div>
        <hr/>
        <div>
            <ul className='text-xl p-2'>
                <li className='p-2  hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Library</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>History</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Your Video</li>
                <li className='p-2  hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Watch Later</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Downnload</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Liked Video</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Watch Later</li>
            </ul>
        </div>
        <hr/>
        <div>
            <ul className='text-xl p-2'>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Trending</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Shoping</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Music</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg' >Movies</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Live</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Gameing</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>News</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Learning</li>
                <li className='p-2 hover:bg-white duration-300 hover:text-black hover:rounded-lg'>Fashion & Beauty</li>
            </ul>
        </div>

    </div>
    );
}

export default SideBar;