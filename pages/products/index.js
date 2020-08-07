import Nav from '../../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../../components/TopNavForLgScreens'
import LgTitle from '../../components/LgTitle'
import BigProductCard from '../../components/BigProductCard'

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
        <BigProductCard title="Stiff Arms for Multi Position Ladders" videoSrc="https://www.youtube.com/embed/mh4h15GpAH0" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac auctor odio. Etiam convallis lacus id sapien suscipit, ut posuere tellus gravida. Cras facilisis feugiat ligula a tempor. Curabitur ultricies ultrices malesuada. Ut at dui quis magna pulvinar luctus ut in diam. Nam pulvinar metus malesuada odio pellentesque efficitur. Nulla ut purus nec risus pretium sollicitudin. Morbi urna ipsum, hendrerit ac urna vel, vulputate aliquam est. Proin et purus ut odio varius imperdiet."/>
      </main>
      <Footer/>
    </div>
  )
}