interface VideoLectureComponentProps {
    id: number,
  thumbnail: string,
  title: string,
  views: number,
  created_date: Date | string,
  channel_name:string,

}

const VideoLectureComponent = ({id,thumbnail,title,views,created_date,channel_name}:VideoLectureComponentProps) => {
  return (
    <div className="bg-amber-300 h-1/4 w-full">

    </div>
  )
}


export default VideoLectureComponent
