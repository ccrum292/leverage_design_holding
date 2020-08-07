import ButtonOne from '../components/ButtonOne'

export default function BigProductCard(props) {
  return(
    <div className="shadowClass bg-yellow-300">
      <iframe height="200" class="w-full sm:h-120" src={props.videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
      <div className="flex flex-row">
        <div>

        </div>
        <div>
          <div className="flex flex-col mb-2">
            <h3 className="jost mx-2 mt-4 text-xl font-bold">{props.title}</h3>
            <p className="jost mx-2 mb-2">{props.text}</p>
            <ButtonOne route="/products" text="Show Me More"/>
          </div>
        </div>
      </div>
    </div>
  )
}