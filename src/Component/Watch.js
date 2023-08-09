import { useSearchParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import LiveChat from "./LiveChat";
import RecoCard from "./RecoCard";

const Watch=()=>{
    const [searchParams]=useSearchParams();
    return(
        <div className="flex flex-col text-white bg-black">
            <div className="flex pt-24 flex-wrap gap-16 ">
                <div className="ml-4">
                    <iframe
                        className="iframe" 
                        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>
                <LiveChat/>
            </div>
            <div className="flex flex-wrap">
                <CommentBox/>
                <RecoCard/>
            </div>
        </div>

        
    );
}
export default Watch;
