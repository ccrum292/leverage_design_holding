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
    <div className="flex flex-col backgroundImg pb-4 min-h-screen">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Contact page for Leverage Design Holding"
        />
        <title>Contact - Leverage Design Holding</title>
      </Head>
      <header>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <LgTitle/>
        <div className="lg:flex mb-4 border-b-2 border-black">
          {navOpen ? null:
          <div className="hidden lg:flex justify-center w-full">
            <TopNavForLgScreens active="Contact"/>
          </div>}
        </div>
      </header>
      <main className="flex-grow">
        <div className="lg:w-8/12 lg:mx-auto">
            <div className="shadowClass grid grid-col-1 mx-2">
              <div className="bg-yellow-300">
                <h3 className="jost mx-2 mt-4 text-xl font-bold border-b-2 border-black">
                  Contact Information
                </h3>
                <p className="jost m-4">
                  Please feel free to contact Member/Manager Dan Crum with the Information provided below.
                </p>
                <h4 className="jost mx-4 text-xl font-bold border-b border-black my-1">Dan Crum, <span className="text-lg">Member/Manager</span></h4>
                {/* <h5 className="jost mx-4 text-lg font-bold my-1">Huntersville, NC 28078</h5> */}
                <h5 className="jost mx-4 text-lg font-bold my-1">(704) 997-6028 Office</h5>
                <h5 className="jost mx-4 text-lg font-bold my-1">(980) 829-9998 Mobile</h5>
                <h5 className="jost mx-4 text-lg font-bold mt-1 mb-4">dcrum@leveragedesignholding.com</h5>
              </div>
            </div>
          </div>
      </main>
      <Footer/>
    </div>
  )
}