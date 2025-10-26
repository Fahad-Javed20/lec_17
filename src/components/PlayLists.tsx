import VideoLectureComponent from "./VideoLectureComponent";
import type { VideoLectureType } from "../types/VideoLectureType";

interface PlayListsProps {
  data: VideoLectureType[];
  name: string;
}

function PlayLists({ data, name }: PlayListsProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl">{name}</span>
      {data.map((video_lecture, i) => (
        <VideoLectureComponent
          key={video_lecture.id}
          vidlec={video_lecture}
          index={i + 1} 
        />
      ))}
    </div>
  );
}

export default PlayLists;
