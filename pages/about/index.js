import Nav from '../../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../../components/TopNavForLgScreens'
import LgTitle from '../../components/LgTitle'
import Footer from '../../components/Footer'

import { useState } from 'react'

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
                Get to Know Leverage Design Holding<span className="text-sm"></span>
              </h3>
              <p className="jost m-4">
              Leverage Design Holding, LLC (LDH) is a product development and intellectual property holding company.  We specialize in recognizing needs in the market and translating those needs into new product offerings.  LDH performs the engineering design, prototyping, and testing functions to complete drawing and specification packages, ready for interested parties to take to production. We look to partner with manufacturers to bring new ideas and solutions to the world, with the goal of making a positive impact on society.  
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}