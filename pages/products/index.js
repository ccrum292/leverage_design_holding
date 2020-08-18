import Nav from '../../components/Nav'
import Head from 'next/head'
import TopNavForLgScreens from '../../components/TopNavForLgScreens'
import LgTitle from '../../components/LgTitle'
import BigProductCard from '../../components/BigProductCard'
import objectWithStoredImgArrays from '../../lib/js/objectWithStoredImgArrays';


import { useState } from 'react'
import Footer from '../../components/Footer'

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="flex flex-col backgroundImg pb-4 min-h-screen">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Products page for Leverage Design Holding"
        />
        <title>Products - Leverage Design Holding</title>
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
              <TopNavForLgScreens active="Products" />
            </div>}
        </div>
      </header>
      <main className="flex-grow lg:w-8/12 lg:mx-auto">
        <BigProductCard firstButton={{ buttonRoute: "/One_Page_Summary-Articulating.pdf", buttonFileName: "Stiff_Arms_One_Page_Summary-Articulating", buttonText: "One Page Summary" }} secondButton={{ buttonRoute: "/Presentation_Slides-Articulated.pdf", buttonFileName: "Stiff_Arms_Presentation_Slides-Articulated", buttonText: "Presentation Slides" }} thirdButton={{ buttonRoute: "/Installation&Use-Articulated.pdf", buttonFileName: "Stiff_Arms_Installation&Use-Articulated", buttonText: "Installation & Use" }} img={objectWithStoredImgArrays.stiffArmsForMultiPositionLadder} title="Stiff Arms&trade; for Multi-Position Ladders" videoSrc="https://www.youtube.com/embed/mh4h15GpAH0" text="Stiff Arms&trade; is a new, patent pending, multi-position ladder safety accessory designed to reduce dangerous ladder motion, sway, and bounce by up to 75%.  In other words, a ladder using Stiff Arms&trade; is at least 4 times stiffer than a normal ladder.  The Stiff Arms&trade; kit consists of adjustable length arms that have cable guides on their outermost ends.  Tubular legs extend from a central housing for attachment to the ladder.  Cables are provided with the necessary anchors, clamps, rail brackets, and fasteners. Stiff Arms&trade; kits can be sold for multi-position ladders ranging from 18 ft to 26 ft. For use, this cable truss kit quickly inserts into the rungs of multi-position ladders without the need of tools. After use, Stiff Arms&trade; collapses to a compact size for storage." />
        <BigProductCard firstButton={{ buttonRoute: "/One_Page_Summary-Extension.pdf", buttonFileName: "Stiff_Arms_One_Page_Summary-Extension", buttonText: "One Page Summary" }} secondButton={{ buttonRoute: "/Presentation_Slides-Extension.pdf", buttonFileName: "Stiff_Arms_Presentation_Slides-Extension", buttonText: "Presentation Slides" }} thirdButton={{ buttonRoute: "/Installation&Use-Extension.pdf", buttonFileName: "Stiff_Arms_Installation&Use-Extension", buttonText: "Installation & Use" }} img={objectWithStoredImgArrays.stiffArmsForExtensionLadder} title="Stiff Arms&trade; for Extention Ladders" videoSrc="https://www.youtube-nocookie.com/embed/RXFSPRwizxE" text="Stiff Arms&trade; for Extension Ladders is a, patent pending, safety accessory designed to reduce dangerous ladder motion, sway, and bounce by up to 75%.  In other words, a ladder using Stiff Arms&trade; is at least 4 times stiffer than a normal ladder.  The Stiff Arms&trade; kit consists of telescoping aluminum arms that have a cable guide on one end and molded clamps on the other.  Cables are provided with the necessary anchors, clamps, rail brackets, and fasteners. Stiff Arms&trade; kits can be sold for ladders ranging from 20 ft up to 48 ft. For use, this cable truss kit quickly clamps to extension ladders without the need of tools. After use, Stiff Arms&trade; collapses to a compact size for storage." />

      </main>
      <Footer />
    </div>
  )
}