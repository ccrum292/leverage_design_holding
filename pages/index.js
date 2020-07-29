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
    <div className="backgroundImg pb-4 h-full">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Home page for Leverage Design Holding"
        />
        <title>Home - Leverage Design Holding</title>
      </Head>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <LgTitle/>
      <div className="lg:flex mb-4 border-b-2 border-black">
        {navOpen ? null:
        <div className="hidden lg:flex justify-center w-full">
          <TopNavForLgScreens active="Home"/>
        </div>}
      </div>
      <div className="lg:w-8/12 lg:mx-auto">
        <JumbotronIntro/>
        <h2 className="jost text-xl font-bold text-black sm:text-4xl text-right mx-2 mt-4 border-b-2 border-black">Product Spotlight</h2>
        <SpotlightCard img={[{src:"/417.jpg", alt: "417"},{src:"/coolCat.jpg", alt: "coolCat"},{src:"/1543982.jpg", alt: "1543982"}]} />
      </div>
      <Footer/>
    </div>
  )
}
