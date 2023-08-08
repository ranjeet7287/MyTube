import userImg from "../Assets/Ranjeet.jpeg"

const ChatMessage=({name,text})=>{
    return(
        <div className="text-white p-2 flex items-center ">
            <div>
                <img className="w-8 rounded-3xl" src={userImg}/>
            </div>
            <div className="ml-4 flex flex-col ">
                <h1 className="font-semibold">{name}</h1>
                <p>{text}</p>
            </div>

        </div>
    );
}
export default ChatMessage;