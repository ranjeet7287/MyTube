import sidebar from "../Assets/menubtn1.svg"
import youtbeicon from "../Assets/youtube.svg"
import Searchicon from "../Assets/search.svg"
import newmic from "../Assets/newmic1.png"
import Notfi from "../Assets/notifi1.png"
import videomakericon from "../Assets/icons8-video-50.png" 
import usericon from "../Assets/icons8-user-48.png"
import { useDispatch } from "react-redux"
import { toggleSideBar } from "../utils/AppSlice"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import store from "../utils/Store"
import { cacheResults } from "../utils/SearchSlice"

const Header=()=>{

    const [SearchQuery,SetSearchQuery]=useState("");
    const [ShowSuggestion,SetShowSuggestion]=useState([]);
    const [SuggestionBoxVisible,SetSuggestionBoxVisible]=useState(false);
 
    const searchChache=useSelector(store => store.search);
    const dispatch=useDispatch();


    const toggleHandler=()=>{
        dispatch(toggleSideBar(true));
    }


    useEffect(()=>{
        
        const timer= setTimeout(()=>{

            if(searchChache[SearchQuery]){
                SetShowSuggestion(searchChache[SearchQuery])
            }else{
                getSearchSuggestion();
            }
        },200)

        return()=>{
            clearInterval(timer);
        }


    },[SearchQuery])

    const getSearchSuggestion=async()=>{
        const data=await fetch("https://cors-anywhere.herokuapp.com/https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="+SearchQuery);
        const json=await data.json();
        SetShowSuggestion(json[1]);
        // console.log(json[1])
        dispatch(cacheResults({
            [SearchQuery]:json[1]
        }))
    }

    return(
        <div 
        className="bg-black text-white flex justify-between items-center p-4 fixed w-full h-16 z-40">
            <div className="flex gap-4 items-center">
                <img className="w-8 cursor-pointer max-md:w-6" src={sidebar} onClick={()=>toggleHandler(true)}/>
                <Link to="/"><img className="w-10 max-sm:hidden" src={youtbeicon}/></Link>
                <Link to="/"><p className="text-2xl max-sm:text-xl">YouTube<sup className="text-gray-300 text-sm">IN</sup></p></Link>
            </div>
            <div className="flex items-center gap-4">
                
                <div>
                    <div className="flex border-2 border-zinc-800 rounded-xl p-[0.1rem] max-sm:ml-9">
                        <input
                        type="text"
                        value={SearchQuery}
                        placeholder="Search"
                        className="bg-black text-white py-2 px-2 w-96 rounded-lg max-lg:w-60 max-sm:w-32 max-md:py-1 "
                        onChange={(e)=>SetSearchQuery(e.target.value)}
                        onFocus={()=>SetSuggestionBoxVisible(true)}
                        onBlur={()=>SetSuggestionBoxVisible(false)}
                        />
                        <button className="px-4 py-2 rounded-lg">
                            <img className="w-7 " src={Searchicon}/>
                        </button>
                    </div>
                    
                    {SuggestionBoxVisible && 
                        <div className="bg-zinc-950 w-[28rem]  mt-1 rounded-xl absolute shadow z-50">
                            <ul>
                                {
                                    ShowSuggestion.map((s,index)=>
                                    <li key={index} className="text-xl font-semibold cursor-pointer px-3 py-1 hover:bg-zinc-800 duration-150 hover:rounded-lg" >{s}</li>)
                                }
                            </ul>
                        </div>
                    }
               </div> 


                <div className="p-2">
                    <img className="w-8 cursor-pointer max-sm:hidden" src={newmic}/>
                </div>
            </div>
            <div className="flex gap-6 max-sm:hidden">
                <img className="w-8 " src={Notfi}/>
                <img className="w-8 " src={videomakericon}/>
                <img className="w-8" src={usericon}/>
            </div>
        </div>
    );
}
export default Header;