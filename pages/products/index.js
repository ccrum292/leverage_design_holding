import Nav from '../../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../../components/TopNavForLgScreens'
import LgTitle from '../../components/LgTitle'

import { useState } from 'react'
import { motion } from "framer-motion"
import Footer from '../../components/Footer'

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="bg-gray-900 pb-4 h-screen">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Products page for Leverage Design Holding"
        />
        <title>Products - Leverage Design Holding</title>
      </Head>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <LgTitle/>
      <div className="lg:flex">
        {navOpen ? null:
        <div className="hidden lg:flex justify-center w-full">
          <TopNavForLgScreens active="Products"/>
        </div>}
      </div>
      <Footer/>
    </div>
  )
}