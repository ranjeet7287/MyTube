import { useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessages } from "../utils/ChatSlice";
import { useEffect } from "react";
import { generateRandomName } from "../utils/Helper";
import { makeRandomMessage } from "../utils/Helper";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LiveChat=()=>{

    const[sendMessage,setSendMessage]=useState();
    const chatmessage=useSelector(store => store.chat.messages)
    const dispatch=useDispatch();

    const messagesHandler=()=>{
        dispatch(addMessages({
            name:"Ranjeet Singh",
            text:sendMessage
        }))
        setSendMessage("")
    }

    useEffect(()=>{
        const livechat=setInterval(()=>{
            dispatch(addMessages({
                name:generateRandomName(),
                text:makeRandomMessage(15)
            }))
        },2000)
        return () =>{
            clearInterval(livechat);
        }
    },[])
    

    return(
        <div className="border-2 mx-4 border-zinc-800 rounded-lg">
            <div>
                <p className="text-xl font-semibold m-2">LiveChat</p>
            </div>
            <hr/>
            <div className="chatbox">
                {
                    chatmessage.map((c,index)=>(
                        <ChatMessage key={index} name={c.name} text={c.text}/>
                    ))
                }
            </div>
            <hr/>
            <div className="flex ">
                <form className=""
                onSubmit={
                    (e)=>{
                        e.preventDefault()
                        dispatch(addMessages(
                            {
                                name:"Ranjeet Singh",
                                text:sendMessage
                            }
                        ))
                        setSendMessage("")
                    }
                }>
                <input
                type="text"
                placeholder="Type.."
                value={sendMessage}
                onChange={(e)=>setSendMessage(e.target.value)}
                className="ml-4 px-6 py-2 m-2 bg-zinc-700 rounded-lg"
                />
                </form>
                <button 
                className="m-2 px-4 rounded-lg bg-zinc-700 hover:bg-gray-500"
                onClick={()=>messagesHandler()}
                >
                Send</button>
            </div>
         
        </div>
    );
}
export default LiveChat;