
const RecoCardTemp=({info})=>{
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails,publishedAt}=snippet;
    const {viewCount,likeCount,favoriteCount,commentCount}=statistics;
    return(
        <div>
            <div className="w-[22rem]  flex border-2 border-zinc-700 rounded-lg cursor-pointer ml-8 my-2 gap-3 p-4 text-white bg-black shadow-lg hover:scale-105 ease-in duration-100 items-center">
             <div>
                 <img className="" alt="thumnails" src={thumbnails.medium.url}/>
             </div>
             <div className="flex ">
                 <div>
                     <p className="font-semibold">{title}</p>
                     <p className="text-gray-400">{channelTitle}</p>
                
                 </div>
             </div>
        </div>
        </div>

    
    );
}
export default RecoCardTemp;