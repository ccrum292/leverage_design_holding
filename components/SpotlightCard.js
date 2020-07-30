import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default function SpotlightCard(props){
  const numberOfImages = props.img.length
  const [imgIndex, setImgIndex] = useState(0) 
  const [imgObj, setImgObj] = useState(props.img[0]);
  
  const handleImgChangeRight = () => {
    if(imgIndex < (numberOfImages-1)){
      setImgIndex(imgIndex + 1);
    } else{
      setImgIndex(0);
    }

    setImgObj(props.img[imgIndex]);
  };

  const handleImgChangeLeft = () => {
    if(imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else{
      setImgIndex(numberOfImages-1);
    }

    setImgObj(props.img[imgIndex]);
  };

  return(
    <div className="cursor-pointer shadowClass flex flex-col justify-center bg-white overflow-hidden m-2 sm:w-80 w-100 transition duration-700 ease-in-out transform  hover:scale-105">
      <div className="relative">
        <img className=" object-cover h-75 sm:h-60 z-0" src={imgObj.src} alt={imgObj.alt}/>
        <div className="absolute bottom-0 my-auto w-full flex justify-between">
          <FontAwesomeIcon className="opacity-75 sm:hover:opacity-100" style={{ color: "#c53030" }} size="2x" icon={faArrowUp} />
          <FontAwesomeIcon className="opacity-75  sm:hover:opacity-100" style={{ color: "#c53030" }} size="2x" icon={faArrowUp} />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="jost text-gray-300 m-2 text-xl font-bold overflow-x-hidden truncate">{props.title}</h3>
        <div className="flex flex-row justify-between items-center">
          <h4 className="jost text-gray-300 m-2 self-end text-xl font-bold overflow-x-hidden truncate w-1/3">${props.price}</h4>
        </div>
      </div>
    </div>
  )
}

// onClick={e =>{
//   e.preventDefault()
//   console.log("right")
//   handleImgChangeRight()
// }}