import Nav from '../../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../../components/TopNavForLgScreens'
import LgTitle from '../../components/LgTitle'
import BigProductCard from '../../components/BigProductCard'
import objectWithStoredImgArrays from '../../lib/js/objectWithStoredImgArrays';


import { useState } from 'react'
import { motion } from "framer-motion"
import Footer from '../../components/Footer'

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="flex flex-col backgroundImg pb-4 min-h-screen">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Products page for Leverage Design Holding"
        />
        <title>Products - Leverage Design Holding</title>
      </Head>
      <header>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <LgTitle/>
        <div className="lg:flex mb-4 border-b-2 border-black">
          {navOpen ? null:
          <div className="hidden lg:flex justify-center w-full">
            <TopNavForLgScreens active="Products"/>
          </div>}
        </div>
      </header>
      <main className="flex-grow lg:w-8/12 lg:mx-auto">
        <BigProductCard firstButton={{buttonRoute:"/One_Page_Summary-Articulating.pdf", buttonFileName:"Stiff_Arms_One_Page_Summary-Articulating", buttonText:"One Page Summary"}} secondButton={{buttonRoute:"/Presentation_Slides-Articulated.pdf", buttonFileName:"Stiff_Arms_Presentation_Slides-Articulated", buttonText:"Presentation Slides"}} thirdButton={{buttonRoute:"/Installation&Use-Articulated.pdf", buttonFileName:"Stiff_Arms_Installation&Use-Articulated", buttonText:"Installation & Use"}} img={objectWithStoredImgArrays.stiffArmsForMultiPositionLadder} title="Stiff Arms for Multi Position Ladders" videoSrc="https://www.youtube.com/embed/mh4h15GpAH0" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac auctor odio. Etiam convallis lacus id sapien suscipit, ut posuere tellus gravida. Cras facilisis feugiat ligula a tempor. Curabitur ultricies ultrices malesuada. Ut at dui quis magna pulvinar luctus ut in diam. Nam pulvinar metus malesuada odio pellentesque efficitur. Nulla ut purus nec risus pretium sollicitudin. Morbi urna ipsum, hendrerit ac urna vel, vulputate aliquam est. Proin et purus ut odio varius imperdiet."/>
        <BigProductCard firstButton={{buttonRoute:"/One_Page_Summary-Extension.pdf", buttonFileName:"Stiff_Arms_One_Page_Summary-Extension", buttonText:"One Page Summary"}} secondButton={{buttonRoute:"/Presentation_Slides-Extension.pdf", buttonFileName:"Stiff_Arms_Presentation_Slides-Extension", buttonText:"Presentation Slides"}} thirdButton={{buttonRoute:"/Installation&Use-Extension.pdf", buttonFileName:"Stiff_Arms_Installation&Use-Extension", buttonText:"Installation & Use"}} img={objectWithStoredImgArrays.stiffArmsForExtensionLadder} title="Stiff Arms for Extention Ladders" videoSrc="https://www.youtube-nocookie.com/embed/RXFSPRwizxE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac auctor odio. Etiam convallis lacus id sapien suscipit, ut posuere tellus gravida. Cras facilisis feugiat ligula a tempor. Curabitur ultricies ultrices malesuada. Ut at dui quis magna pulvinar luctus ut in diam. Nam pulvinar metus malesuada odio pellentesque efficitur. Nulla ut purus nec risus pretium sollicitudin. Morbi urna ipsum, hendrerit ac urna vel, vulputate aliquam est. Proin et purus ut odio varius imperdiet."/>

      </main>
      <Footer/>
    </div>
  )
}