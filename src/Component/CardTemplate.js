
const CardTemplate=({info})=>{
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails,publishedAt}=snippet;
    const {viewCount,likeCount,favoriteCount,commentCount}=statistics;
    return(
        <div>
            <div className="flex flex-col w-80 cursor-pointer m-8 gap-3 p-2 text-white bg-black shadow-lg hover:scale-105 ease-in duration-100 max-lg:w-60 max-sm:w-80">
             <div>
                 <img className="rounded-xl" alt="thumnails" src={thumbnails.medium.url}/>
             </div>
             <div className="flex ">
                 <div>
                     <p className="font-semibold">{title}</p>
                     <p className="text-gray-200 ">{channelTitle}</p>
                     <p className="text-gray-200 max-md:hidden">{viewCount} Views </p>
                     <p className="text-gray-200 max-md:hidden"> {publishedAt}</p>
                 </div>
             </div>
        </div>
        </div>

    
    );
}
export default CardTemplate;