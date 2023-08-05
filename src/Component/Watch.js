import { useSearchParams } from "react-router-dom";
import CommentBox from "./CommentBox";

const Watch=()=>{
    const [searchParams]=useSearchParams();
    return(

        <div className="flex flex-col text-white bg-black">
            <div className="pt-24 ml-4">
                <iframe
                width="900"
                height="450" 
                src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
                title="YouTube video player"  
                allowfullscreen
                ></iframe>
            </div>
            <CommentBox/>
        </div>
        
    );
}
export default Watch;
