import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavItem from "./NavItem"

export default function Nav(props) {

  return (
    <>
      <div className="flex items-center justify-between lg:hidden">
        <div className="pl-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/">
            <a className="jost self-center text-2xl font-black text-black sm:text-3xl">Leverage Design Holding<span className="text-base">, LLC</span></a>
          </Link>
        </div>
        <div className="p-2 mr-2 my-2 cursor-pointer" onClick={() => { props.setNavOpen(!props.navOpen) }}>
          <FontAwesomeIcon style={{ color: "#2d3748" }} size="2x" icon={faBars} />
        </div>
        
      </div>
      {props.navOpen ?
        <div className="flex flex-col pt-1 pb-2 sm:rounded-b-lg sm:py-2 lg:hidden">
          <NavItem href="/" id={1} text="Home" classNameTailwind="px-16 mt-2 mb-2"/>
          <NavItem href="/products" id={2} text="Products" classNameTailwind="px-16 mt-2 mb-2"/>
          <NavItem href="/about" id={3} text="About" classNameTailwind="px-16 mt-2 mb-2"/>
          <NavItem href="/contact" id={4} text="Contact" classNameTailwind="px-16 mt-2 mb-2"/>
        </div> 
        : null}

    </>
  )
}
