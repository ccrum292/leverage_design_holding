export default function JumbotronIntro() {
  return(
      <div className="relative shadowClass">
        <img alt="archimedes lever" src="/archimedes-lever.jpg" className=""/>
        <div className="absolute bottom-0 flex flex-col bg-black bg-opacity-75 z-50">
          <h2 className="text-white text-lg md:text-4xl text-left italic mx-4">We are Leverage Design Holding.</h2>
          <h2 className="text-white italic md:text-3xl mx-4 mb-2">A Company Built to Develope and Leverage Inteligent Design to Move the World.</h2>
        </div>
      </div>
      
    
  )
}