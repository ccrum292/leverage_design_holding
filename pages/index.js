import Nav from '../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../components/TopNavForLgScreens'
import LgTitle from '../components/LgTitle'
import Footer from '../components/Footer'
import JumbotronIntro from '../components/JumbotronIntro'
import SpotlightCard from '../components/SpotlightCard'
import objectWithStoredImgArrays from '../lib/js/objectWithStoredImgArrays'

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
              <SpotlightCard videoSrc="https://www.youtube-nocookie.com/embed/RXFSPRwizxE" title="Design One" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac auctor odio. Etiam convallis lacus id sapien suscipit, ut posuere tellus gravida. Cras facilisis feugiat ligula a tempor. Curabitur ultricies ultrices malesuada. Ut at dui quis magna pulvinar luctus ut in diam. Nam pulvinar metus malesuada odio pellentesque efficitur. Nulla ut purus nec risus pretium sollicitudin. Morbi urna ipsum, hendrerit ac urna vel, vulputate aliquam est. Proin et purus ut odio varius imperdiet." 
                img={objectWithStoredImgArrays.stiffArmsForExtensionLadder} />
              <SpotlightCard videoSrc="https://www.youtube.com/embed/mh4h15GpAH0" title="Design One" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac auctor odio. Etiam convallis lacus id sapien suscipit, ut posuere tellus gravida. Cras facilisis feugiat ligula a tempor. Curabitur ultricies ultrices malesuada. Ut at dui quis magna pulvinar luctus ut in diam. Nam pulvinar metus malesuada odio pellentesque efficitur. Nulla ut purus nec risus pretium sollicitudin. Morbi urna ipsum, hendrerit ac urna vel, vulputate aliquam est. Proin et purus ut odio varius imperdiet." 
                img={objectWithStoredImgArrays.stiffArmsForMultiPositionLadder} />
            </div>
          </div>
      </main>
      <Footer/>
    </div>
  )
}
