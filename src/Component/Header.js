import sidebar from "../Assets/menubtn1.svg"
import youtbeicon from "../Assets/youtube.svg"
import Searchicon from "../Assets/search.svg"
import Micicon from "../Assets/icons8.png" 
import Notfi from "../Assets/icons8-alert-1.png" 
import videomakericon from "../Assets/icons8-video-50.png" 
import usericon from "../Assets/icons8-user-48.png"
import { useDispatch } from "react-redux"
import { toggleSideBar } from "../utils/AppSlice"

const Header=()=>{

    const dispatch=useDispatch();
    const toggleHandler=()=>{
        dispatch(toggleSideBar());
    }

    return(
        <div className="bg-black text-white flex justify-between items-center p-4 fixed w-full h-16">
            <div className="flex gap-4 items-center">
                <img className="w-8 cursor-pointer" src={sidebar} onClick={()=>toggleHandler()}/>
                <img className="w-10" src={youtbeicon}/>
                <p className="text-2xl">YouTube<sup className="text-gray-300 text-sm">IN</sup></p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex border-2 border-zinc-800 rounded-xl p-[0.1rem] ">
                    <input
                    type="text"
                    placeholder="Search"
                    className="bg-black text-white py-2 px-2 w-96 rounded-lg"
                    />
                    <button className="px-4 py-2 rounded-lg">
                        <img className="w-7 " src={Searchicon}/>
                    </button>
                </div>
                <div className="bg-zinc-800 p-2 rounded-3xl">
                    <img className="w-8 " src={Micicon}/>
                </div>
            </div>
            <div className="flex gap-6">
                <img className="w-8" src={Notfi}/>
                <img className="w-8" src={videomakericon}/>
                <img className="w-8" src={usericon}/>
            </div>
        </div>
    );
}
export default Header;