import Nav from '../../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../../components/TopNavForLgScreens'
import LgTitle from '../../components/LgTitle'
import Footer from '../../components/Footer'

import { useState } from 'react'
import { motion } from "framer-motion"

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="bg-gray-900 pb-4 h-screen">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Legal page for Leverage Design Holding"
        />
        <title>Legal - Leverage Design Holding</title>
      </Head>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <LgTitle/>
      <div className="lg:flex">
        {navOpen ? null:
        <div className="hidden lg:flex justify-center w-full">
          <TopNavForLgScreens active="Legal"/>
        </div>}
      </div>
      <Footer/>
    </div>
  )
}