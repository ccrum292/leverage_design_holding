import Nav from '../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../components/TopNavForLgScreens'
import LgTitle from '../components/LgTitle'
import Footer from '../components/Footer'
import JumbotronIntro from '../components/JumbotronIntro'

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
      <div className="lg:flex mb-4">
        {navOpen ? null:
        <div className="hidden lg:flex justify-center w-full">
          <TopNavForLgScreens active="Home"/>
        </div>}
      </div>
      <JumbotronIntro/>
      <Footer/>
    </div>
  )
}
