import "./App.css";
import PlayLists from "./components/PlayLists";
import type { VideoLectureType } from "./types/VideoLectureType";


function App() {

  const videoLectures1:VideoLectureType[]=[
    {
    id: 1,
    thumbnail: "http://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
    title: "Into to Machine Learning (Zero to Hero) Part-1",
    views: 1.4,
    created_date: "6",
    channel_name: "TensorFlow"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Into to Web Development (Zero to Hero) Part-1",
    views: 3.5,
    created_date: "6",
    channel_name: "TensorFlow"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Into to Artifical Inteligence (Zero to Hero) Part-1",
    views: 5.4,
    created_date: "6",
    channel_name: "TensorFlow"
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Into to Block Chain (Zero to Hero) Part-1",
    views: 8.4,
    created_date: "6",
    channel_name: "TensorFlow"
  }
  ]

const videoLectures2:VideoLectureType[]=[
  {
  id: 4,
  thumbnail: "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  title: "Little Moments That Made Me Smile",
  views: 1.4,
  created_date: "6",
  channel_name: "TensorFlow"
},
{
  id: 5,
  thumbnail: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  title: "Everything Looks Better in Slow Motion",
  views: 3.5,
  created_date: "6",
  channel_name: "TensorFlow"
},
{
  id: 6,
  thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  title: "Weekend Reset: Cleaning, Cooking, Chilling",
  views: 5.4,
  created_date: "6",
  channel_name: "TensorFlow"
},
{
  id: 7,
  thumbnail: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  title: "Hidden Corners of Pakistan You Must See",
  views: 8.4,
  created_date: "6",
  channel_name: "TensorFlow"
}
]
  return (
    <>
      <PlayLists data = {videoLectures1}  name=" Favourite platlist"/>
      <PlayLists data = {videoLectures2}  name=" Favourite platlist 2"/>
  
    </>
  );
}

export default App;
