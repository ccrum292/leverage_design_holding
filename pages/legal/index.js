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

      </main>
      <Footer />
    </div>
  )
}