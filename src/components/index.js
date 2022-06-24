import VideoConferencing from "./VideoConferencing";
import Livestreaming from "./Livestreaming";
import Broadcasting from "./Broadcasting";

const returnLibrary = () => {
    return {
        VideoConferencing : VideoConferencing,
        Livestreaming : Livestreaming,
        Broadcasting : Broadcasting,
        // you can add here other components that you want to export
    }
}
export default returnLibrary()