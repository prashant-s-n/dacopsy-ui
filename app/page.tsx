import Nav from './nav';
import LandingIntro from './landing-intro';
import Features from './features';
import AboutUs from './about-us';
import Story from './story';
import Pricing from './pricing';

export default function Home() {
  return (
    <main >
      <div className='flex flex-col max-h-screen'>
        <Nav/>
        <LandingIntro/>
        <Features/>
        <Story/>
        <AboutUs/>
        <Pricing/>
      </div>
    </main>
  );
}
