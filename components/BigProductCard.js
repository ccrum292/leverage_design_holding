import ButtonDownload from '../components/ButtonDownload'
import CarouselWithImgPreview from "../components/CarouselWithImgPreview"


export default function BigProductCard(props) {
  return(
    <div className="shadowClass bg-yellow-300 my-4 mx-2">
      <iframe height="200" className="w-full sm:h-120 " src={props.videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
      <div className="flex flex-col lg:flex-row">
        <div className="mt-4 mx-2 lg:mx-2 lg:my-auto lg:w-1/2">
          <CarouselWithImgPreview img={props.img}/>
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-col mb-2">
            <h3 className="jost mx-2 mt-4 text-xl font-bold">{props.title}</h3>
            <p className="jost mx-2 mb-2">{props.text}</p>
            <div className="flex flex-col justify-center w-full">
              <ButtonDownload route={props.firstButton.buttonRoute} fileName={props.firstButton.buttonFileName} text={props.firstButton.buttonText}/>
              <ButtonDownload route={props.secondButton.buttonRoute} fileName={props.secondButton.buttonFileName} text={props.secondButton.buttonText}/>
              <ButtonDownload route={props.thirdButton.buttonRoute} fileName={props.thirdButton.buttonFileName} text={props.thirdButton.buttonText}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}