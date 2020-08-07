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
          content="About page for Leverage Design Holding"
        />
        <title>About - Leverage Design Holding</title>
      </Head>
      <header>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <LgTitle/>
        <div className="lg:flex mb-4 border-b-2 border-black">
          {navOpen ? null:
          <div className="hidden lg:flex justify-center w-full">
            <TopNavForLgScreens active="About"/>
          </div>}
        </div>
      </header>
      <main className="flex-grow">
        <div className="lg:w-8/12 lg:mx-auto">
          <div className="shadowClass grid grid-col-1 sm:grid-cols-2 mx-2 bg-yellow-300">
            <img className="" src="/_MG_0403-min.jpg" alt="Dan Crum Standing Next to Stiff Arms"/>
            <div className="bg-yellow-300">
              <h3 className="jost mx-2 mt-4 text-xl font-bold border-b-2 border-black">
                Get to Know Leverage Design Holding
              </h3>
              <p className="jost m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim varius massa, id ornare leo maximus sed. Vestibulum vitae tellus ipsum. Nulla pulvinar nibh vel magna volutpat sollicitudin. Donec congue accumsan vestibulum. In dignissim, magna sed molestie luctus, nulla elit pharetra mauris, vel vehicula libero elit vitae tortor. Praesent faucibus enim ac neque feugiat, id semper nulla fringilla. Nulla et dignissim risus. Fusce non tristique ligula. Donec facilisis massa eu tellus tempor consequat dapibus quis tellus. Aliquam commodo, dui sit amet egestas mollis, sem est egestas nisi, id imperdiet nibh leo in justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. 
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}