import Nav from '../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../components/TopNavForLgScreens'
import LgTitle from '../components/LgTitle'
import Footer from '../components/Footer'
import JumbotronIntro from '../components/JumbotronIntro'
import SpotlightCard from '../components/SpotlightCard'

import { useState } from 'react'
import { motion } from "framer-motion"

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="flex flex-col backgroundImg pb-4 min-h-screen">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Home page for Leverage Design Holding"
        />
        <title>Home - Leverage Design Holding</title>
      </Head>
      <header>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <LgTitle/>
        <div className="lg:flex mb-4 border-b-2 border-black">
          {navOpen ? null:
          <div className="hidden lg:flex justify-center w-full">
            <TopNavForLgScreens active="Home"/>
          </div>}
        </div>
      </header>
      <main className="flew-grow">
        <div className="lg:w-8/12 lg:mx-auto">
            <JumbotronIntro/>
            <h2 className="jost text-xl font-bold text-black sm:text-4xl text-right mb-2 mx-2 mt-4 border-b-2 border-black">Product Spotlight</h2>
            <div className="flex flex-col lg:flex-row">
              <SpotlightCard videoSrc="/Introducing_Stiff_Arms.mp4" title="Design One" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac auctor odio. Etiam convallis lacus id sapien suscipit, ut posuere tellus gravida. Cras facilisis feugiat ligula a tempor. Curabitur ultricies ultrices malesuada. Ut at dui quis magna pulvinar luctus ut in diam. Nam pulvinar metus malesuada odio pellentesque efficitur. Nulla ut purus nec risus pretium sollicitudin. Morbi urna ipsum, hendrerit ac urna vel, vulputate aliquam est. Proin et purus ut odio varius imperdiet." 
                img={[{src:"/Ladders017-min.jpg", alt: "Stiff Arms Laying on white backdrop"},{src:"/_MG_0349-min.jpg", alt: "upward looking angle of stiff arms applied to ladder"},{src:"_MG_0383-min.jpg", alt:"man climbing ladder"},{src:"/_MG_0416-min.jpg", alt: "Cable anchor in lower bracket"},{src:"_MG_0417-min.jpg", alt:"arm clamp"},{src:"IMG_0346-min.jpg", alt:"fully extended lader with stiff arms"},{src:"_MG_0415-min.jpg", alt:"ladder laying on ground with stiff arms"},{src:"_MG_0420-min.jpg", alt:"Lower cable anchor"},{src:"_MG_0421-min.jpg", alt:"upper cable anchor"}]} />
              <SpotlightCard videoSrc="Stiff_Arms_for_Multi-Position_Ladders.mp4" title="Design One" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac auctor odio. Etiam convallis lacus id sapien suscipit, ut posuere tellus gravida. Cras facilisis feugiat ligula a tempor. Curabitur ultricies ultrices malesuada. Ut at dui quis magna pulvinar luctus ut in diam. Nam pulvinar metus malesuada odio pellentesque efficitur. Nulla ut purus nec risus pretium sollicitudin. Morbi urna ipsum, hendrerit ac urna vel, vulputate aliquam est. Proin et purus ut odio varius imperdiet." 
                img={[{src:"0704200939a-min.jpg", alt: "Multi-Position Stiff Arm looking up at an angle"},{src:"/0707201912b_HDR-min.jpg", alt: "Multi Position Stiff Arm laying on ground"},{src:"/0704200949a_HDR-min.jpg", alt: "Multi Position Ladder fully raised with Stiff Arms"},{src:"/0704200906b-min.jpg", alt: "Multi Position Stiff Arm laying being applied to ladder"},{src:"/0704200946-min.jpg", alt: "Man climbing ladder"},{src:"/0707201953f-min.jpg", alt: "Stiff Arms Placed on Garage Wall"},{src:"/0704200949a-min.jpg", alt: "Another perspective of Multi Position ladder with Stiff Arms"}]} />
            </div>
          </div>
      </main>
      <Footer/>
    </div>
  )
}
