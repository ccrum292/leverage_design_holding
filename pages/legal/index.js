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
          content="Legal page for Leverage Design Holding"
        />
        <title>Legal - Leverage Design Holding</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-175641724-1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-175641724-1');
        `,
          }}
        />
      </Head>
      <header>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <LgTitle />
        <div className="lg:flex mb-4 border-b-2 border-black">
          {navOpen ? null :
            <div className="hidden lg:flex justify-center w-full">
              <TopNavForLgScreens active="" />
            </div>}
        </div>
      </header>
      <main className="flex-grow">
      <div className="lg:w-1/3 lg:mx-auto">
          <div className="shadowClass grid grid-col-1 mx-2">
            <div className="bg-yellow-300">
              <h3 className="jost mx-2 mt-4 text-xl font-bold border-b-2 border-black">
                Privacy Policy
                </h3>
              <p className="jost m-4">
                Click the button below to view our privacy policy on termsfeed.com.
                </p>
                <button onClick={() => window.location.href = "https://www.termsfeed.com/live/a0629d10-2c63-4262-b89b-65c8b51f6b79"} className="text-xl text-center text-sm text-white bg-gray-700 shadowClass mx-4 mb-4 cursor-pointer p-1 self-center transition duration-700 ease-in-out transform duration-700 hover:text-black hover:font-black hover:bg-gray-500 hover:scale-105">View</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}