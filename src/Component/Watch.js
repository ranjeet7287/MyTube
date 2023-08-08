import { useSearchParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import LiveChat from "./LiveChat";
import RecoCard from "./RecoCard";

const Watch=()=>{
    const [searchParams]=useSearchParams();
    return(
        <div className="flex flex-col text-white bg-black">
            <div className="flex pt-24 justify-around">
                <div className="ml-4">
                <iframe
                        className="rounded-xl shadow-2xl "
                        width="750"
                        height="450" 
                        src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                </div>
            <LiveChat/>
            </div>
            <div className="flex">
                <CommentBox/>
                <RecoCard/>
            </div>
        </div>

        
    );
}
export default Watch;
