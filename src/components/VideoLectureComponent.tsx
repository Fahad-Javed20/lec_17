import type { VideoLectureType } from "../types/VideoLectureType";

interface VideoLectureComponentProps {
  vidlec: VideoLectureType;
  name:string
}

const VideoLectureComponent = ({ vidlec,name }: VideoLectureComponentProps) => {
  return (
    <div className="flex">
      <h1>{name}</h1>
      <div className="font-bold flex my-auto mx-4">{vidlec.id}</div>
      <div className="h-40 w-5/6 bg-white shadow-2xl flex group cursor-pointer overflow-hidden rounded-lg">
        <div className="w-1/5 h-full relative overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-125"
            src={vidlec.thumbnail}
            alt=""
          />
          <span className="bg-black text-white px-2 absolute bottom-2 right-2 rounded">
            12:09
          </span>

          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <div className="text-white text-3xl">&#9658;</div>
          </div>
        </div>

        <div className="w-4/5 h-full">
          <h1 className="text-xl font-bold text-left px-4">{vidlec.title}</h1>
          <div className="flex gap-3 px-4">
            <p className="font-semibold">{vidlec.channel_name}</p>
            <p>{vidlec.views}M views</p>
            <p>{vidlec.created_date} years ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLectureComponent;
