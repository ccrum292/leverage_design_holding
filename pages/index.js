import Nav from '../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../components/TopNavForLgScreens'
import LgTitle from '../components/LgTitle'
import Footer from '../components/Footer'
import JumbotronIntro from '../components/JumbotronIntro'
import SpotlightCard from '../components/SpotlightCard'
import objectWithStoredImgArrays from '../lib/js/objectWithStoredImgArrays'

import { useState } from 'react'

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="flex flex-col backgroundImg pb-4 min-h-screen">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Home page for Leverage Design Holding"
        />
        <title>Home - Leverage Design Holding</title>
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
              <TopNavForLgScreens active="Home" />
            </div>}
        </div>
      </header>
      <main className="flew-grow">
        <div className="lg:w-8/12 lg:mx-auto">
          <JumbotronIntro />
          <h2 className="jost text-xl font-bold text-black sm:text-4xl text-right mb-2 mx-2 mt-4 border-b-2 border-black">Product Spotlight</h2>
          <div className="flex flex-col xl:flex-row">
            <SpotlightCard videoSrc="https://www.youtube-nocookie.com/embed/RXFSPRwizxE" title="Stiff Arms&trade; for Extension Ladders" text="Stiff Arms&trade; is a new, patent pending, extension ladder safety accessory designed to reduce dangerous ladder motion, sway, and bounce by up to 75%.  In other words, a ladder using Stiff Arms&trade; is at least 4 times stiffer than a normal ladder. Stiff Arms&trade; quickly clamps to any extension ladder, with no tools required. After use, Stiff Arms&trade; collapses to a compact size for storage."
              img={objectWithStoredImgArrays.stiffArmsForExtensionLadder} />
            <SpotlightCard videoSrc="https://www.youtube.com/embed/mh4h15GpAH0" title="Stiff Arms&trade; for Multi-Position Ladders" text="Stiff Arms&trade; is a new, patent pending, mult-position ladder safety accessory designed to reduce dangerous ladder motion, sway, and bounce by up to 75%.  In other words, a ladder using Stiff Arms&trade; is at least 4 times stiffer than a normal ladder. Stiff Arms&trade; quickly inserts into the rungs of multi-position ladders, with no tools required. After use, Stiff Arms&trade; collapses to a compact size for storage"
              img={objectWithStoredImgArrays.stiffArmsForMultiPositionLadder} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
