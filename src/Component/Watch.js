import { useSearchParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import LiveChat from "./LiveChat";
const Watch=()=>{
    const [searchParams]=useSearchParams();
    return(
        <div className="flex flex-col text-white bg-black">
            <div className="flex pt-24">
                <div className="ml-4">
                <iframe
                        className="rounded-xl shadow-2xl "
                        width="900"
                        height="500" 
                        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>
            <LiveChat/>
            </div>
            <CommentBox/>
        </div>

        
    );
}
export default Watch;
