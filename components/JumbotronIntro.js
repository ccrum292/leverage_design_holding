export default function JumbotronIntro() {
  return(
      <div className="relative">
        <img alt="archimedes lever" src="/archimedes-lever.jpg" className="mx-auto md:w-8/12"/>
        <div className="absolute bottom-0 flex flex-col bg-black bg-opacity-75 z-50">
          <h2 className="text-white text-lg text-left italic mx-2">We are Leverage Design Holding.</h2>
          <h2 className="text-white italic mx-2">A Company Built to Develope and Leverage Inteligent Design to Move the World.</h2>
        </div>
      </div>
      
    
  )
}