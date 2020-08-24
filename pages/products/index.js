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
        <BigProductCard firstButton={{ buttonRoute: "/One_Page_Summary-Articulating.pdf", buttonFileName: "Stiff_Arms_One_Page_Summary-Articulating", buttonText: "One Page Summary" }} secondButton={{ buttonRoute: "/Presentation_Slides-Articulated.pdf", buttonFileName: "Stiff_Arms_Presentation_Slides-Articulated", buttonText: "Presentation Slides" }} thirdButton={{ buttonRoute: "/Installation&Use-Articulated.pdf", buttonFileName: "Stiff_Arms_Installation&Use-Articulated", buttonText: "Installation & Use" }} img={objectWithStoredImgArrays.stiffArmsForMultiPositionLadder} title="Stiff Arms&trade; for Multi-Position Ladders" videoSrc="https://www.youtube.com/embed/mh4h15GpAH0" text="Stiff Arms&trade; for Multi-Position Ladders is a patent pending, safety accessory designed to reduce dangerous ladder motion, sway, and bounce by up to 75%.  In other words, a ladder using Stiff Arms&trade; is at least 4 times stiffer than a normal ladder.  Stiff Arms&trade; Multi-Position kits consist of cables, anchor and rail brackets, fasteners, and  adjustable length arms that have cable guides on their outermost ends and tubular legs on the other.  Prior to everyday use, the cable truss quickly inserts into the rungs of any multi-position ladder, with no tools required. After use, Stiff Arms&trade; collapses to a compact size for storage. Stiff Arms&trade; kits can be sold for multi-position ladders ranging from 18 ft to 26 ft." />
        <BigProductCard firstButton={{ buttonRoute: "/One_Page_Summary-Extension.pdf", buttonFileName: "Stiff_Arms_One_Page_Summary-Extension", buttonText: "One Page Summary" }} secondButton={{ buttonRoute: "/Presentation_Slides-Extension.pdf", buttonFileName: "Stiff_Arms_Presentation_Slides-Extension", buttonText: "Presentation Slides" }} thirdButton={{ buttonRoute: "/Installation&Use-Extension.pdf", buttonFileName: "Stiff_Arms_Installation&Use-Extension", buttonText: "Installation & Use" }} img={objectWithStoredImgArrays.stiffArmsForExtensionLadder} title="Stiff Arms&trade; for Extention Ladders" videoSrc="https://www.youtube-nocookie.com/embed/RXFSPRwizxE" text="Stiff Arms&trade; for Extension Ladders is a, patent pending, safety accessory designed to reduce dangerous ladder motion, sway, and bounce by up to 75%.  In other words, a ladder using Stiff Arms&trade; is at least 4 times stiffer than a normal ladder.  Stiff Arms&trade; kits consist of cables, anchor and rail brackets, fasteners, and  telescoping aluminum arms that have cable guides on one end and molded clamps on the other. Prior to everyday use, Stiff Arms&trade; quickly clamps to any extension ladder, with no tools required. After use, Stiff Arms&trade; collapses to a compact size for storage. Stiff Arms&trade; kits can be sold for ladders ranging from 20 ft up to 48 ft." />

      </main>
      <Footer />
    </div>
  )
}