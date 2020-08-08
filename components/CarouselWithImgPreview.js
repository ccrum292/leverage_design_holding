import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default function CarouselWithImgPreview(props) {
  const numberOfImages = props.img.length
  const [imgIndex, setImgIndex] = useState(0) 
  const [imgObj, setImgObj] = useState(props.img[0]);
  const [expandedImgDiv, setExpandedImgDiv] = useState(false)
  
  const handleImgChangeRight = () => {
    console.log(`first imgIndex ${imgIndex}`)
    if(imgIndex < (numberOfImages-1)){
      setImgIndex(imgIndex + 1);
      setImgObj(props.img[imgIndex +1]);
    } else{
      setImgIndex(0);
      setImgObj(props.img[0]);
    }
  };

  const handleImgChangeLeft = () => {
    console.log(`first imgIndex ${imgIndex}`)

    if(imgIndex > 0) {
      setImgIndex(imgIndex - 1);
      setImgObj(props.img[imgIndex-1]);

    } else{
      setImgIndex(numberOfImages-1);
      setImgObj(props.img[numberOfImages-1]);

    }
  };


  return(
    <div className="relative w-full">
      <img className="object-cover w-full h-60 sm:h-120 lg:h-75 z-0" src={imgObj.src} alt={imgObj.alt}/>
      <div className="absolute bottom-0 my-auto w-full h-full flex items-center  justify-between">
        <FontAwesomeIcon onClick={e =>{
          e.preventDefault()
          handleImgChangeLeft()
        }} className="cursor-pointer ml-1 opacity-75 transition duration-700 ease-in-out transform sm:hover:opacity-100 sm:hover:scale-110" style={{ color: "#ecc94b" }} size="2x" icon={faChevronLeft} />
        <FontAwesomeIcon onClick={e =>{
          e.preventDefault()
          handleImgChangeRight()
        }} className="cursor-pointer mr-1 opacity-75 transition duration-700 ease-in-out transform sm:hover:opacity-100 sm:hover:scale-110" style={{ color: "#ecc94b" }} size="2x" icon={faChevronRight} />
        <FontAwesomeIcon onClick={e =>{
          e.preventDefault()
          setExpandedImgDiv(()=>!expandedImgDiv)
        }} className="absolute bottom-0 right-0 cursor-pointer m-1 opacity-75 transition duration-700 ease-in-out transform sm:hover:opacity-100 sm:hover:scale-110" style={{ color: "#ecc94b" }} size="2x" icon={faExpandAlt} />
      </div>
      {expandedImgDiv ? 
      <div className="fixed top-0 left-0 min-h-screen min-w-full z-50 bg-gray-800 bg-opacity-90 flex justify-center items-center">
        <img className="object-contain w-full h-screen z-0" src={imgObj.src} alt={imgObj.alt}/>
        <div className="absolute bottom-0 my-auto w-full h-full flex items-center  justify-between">
          <FontAwesomeIcon onClick={e =>{
            e.preventDefault()
            handleImgChangeLeft()
          }} className="cursor-pointer ml-1 opacity-75 transition duration-700 ease-in-out transform sm:hover:opacity-100 sm:hover:scale-110" style={{ color: "#ecc94b" }} size="2x" icon={faChevronLeft} />
          <FontAwesomeIcon onClick={e =>{
            e.preventDefault()
            handleImgChangeRight()
          }} className="cursor-pointer mr-1 opacity-75 transition duration-700 ease-in-out transform sm:hover:opacity-100 sm:hover:scale-110" style={{ color: "#ecc94b" }} size="2x" icon={faChevronRight} />
          <FontAwesomeIcon onClick={e =>{
            e.preventDefault()
            setExpandedImgDiv(()=>!expandedImgDiv)
          }} className="absolute top-0 right-0 cursor-pointer mr-4 mt-2 opacity-75 transition duration-700 ease-in-out transform sm:hover:opacity-100 sm:hover:scale-110" style={{ color: "#ecc94b" }} size="2x" icon={faTimes} />
        </div>
      </div>: null
      }

    </div>
  )
}