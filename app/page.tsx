import Image from 'next/image'
import Nav from './nav'
import LandingIntro from './landing-intro'
import Features from './features'
import AboutUs from './about-us'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '400']
})

export default function Home() {
  return (
    <main className={dmSans.className}>
    <div className="flex flex-col max-h-screen">
      <Nav/>
      <LandingIntro/>
      <Features/>
      <AboutUs/>
    </div>
    </main>
  )
}
