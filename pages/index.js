import Nav from '../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../components/TopNavForLgScreens'
import LgTitle from '../components/LgTitle'

import { useState } from 'react'
import { motion } from "framer-motion"

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="bg-gray-900 pb-4">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Next.js and Tailwind eCommerce Store"
        />
        <title>Caleb's Commerce</title>
      </Head>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <LgTitle/>
      <div className="lg:flex">
        {navOpen ? null:
        <div className="hidden lg:flex justify-center w-full">
          <TopNavForLgScreens active="Home"/>
        </div>}
      </div>
    </div>
  )
}
