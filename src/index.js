import VideoConferencing from "components/VideoConferencing"
import Livestreaming from "components/Livestreaming"
import Broadcasting from "components/Broadcasting"


const returnLibrary = () => {
    return {
      VideoConferencing: VideoConferencing, 
      Broadcasting : Broadcasting,
      Livestreaming : Livestreaming,
        // you can add here other components that you want to export
    }
}

export default returnLibrary()