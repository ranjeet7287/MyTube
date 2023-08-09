import ButtonList from "./ButtonList";
import VideoCard from "./VideoCards";
const VideoContainer=()=>{
    return(
        <div className="pl-24  bg-black max-md:pl-0">
            <ButtonList/>
            <VideoCard/>
        </div>
    );
}
export default VideoContainer;