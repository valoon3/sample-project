import {useState} from "react";

import AppLayout from '/components/section/AppLayout'


export default function Home() {

  const [likes, setLikes] = useState('Like');

  const handleClick = (e) => {
    setLikes("don't likes");
  };


  return (
    <>
      <AppLayout />
    </>
  )
}
