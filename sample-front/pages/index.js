import Header from "../components/Header";
import {useState} from "react";


export default function Home() {

  const [likes, setLikes] = useState('Like');

  const handleClick = (e) => {
    setLikes("don't likes");
  };


  return (
    <>
      <Header sampleString="react"/>
      <div>welcome next.js</div>
        <button onClick={handleClick}>{likes}</button>
    </>
  )
}
