import VideoLectureComponent from "./VideoLectureComponent";
import {videoLectures1} from "./LecturesArray1"
import { videoLectures2 } from "./LecturesArray2";


function PlayLists() {
  return (
    <>
    <div className="flex flex-col gap-2">
     
      {videoLectures1.map((video_lecture, i ) => (
          <VideoLectureComponent key={video_lecture.id} vidlec={video_lecture} index={i+1} />
        ))}
        {videoLectures2.map((video_lecture, i ) => (
          <VideoLectureComponent key={video_lecture.id} vidlec={video_lecture} index={i+1} />
        ))}
    </div>
      
    </>
  );
}

export default PlayLists;
