const Shimmer=()=>{
    return(
    
        <div className="flex flex-wrap pt-28">
            {Array(20).fill("").map((e,index)=>(
                <div key={index} className="w-80 h-52 bg-zinc-800 rounded-lg m-8"></div>
            ))}
        </div>
        
    );
}
export default Shimmer;