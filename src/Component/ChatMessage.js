const ChatMessage=({name,text})=>{
    return(
        <div className="text-white p-2 flex items-center ">
            <div>
                <img className="w-8 rounded-3xl" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"/>
            </div>
            <div className="ml-4 flex flex-col ">
                <h1 className="font-semibold">{name}</h1>
                <p>{text}</p>
            </div>

        </div>
    );
}
export default ChatMessage;