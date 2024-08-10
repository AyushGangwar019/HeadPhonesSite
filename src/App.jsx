import { UpdateFollower } from "react-mouse-follower"
import useLenis from './hooks/useLenis';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner";
import BannerText from "./components/BannerText/BannerText";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

function App() {
  useLenis();
  return (
    <main className='overflow-x-hidden'>
    <UpdateFollower
    className="sample"
      mouseOptions={{
        backgroundColor: '#ffffff',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
    <Navbar/>
    <Hero/>
    </UpdateFollower>
    <UpdateFollower
    className="sample"
      mouseOptions={{
        backgroundColor: '#000000',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
    <Services/>
    <Banner/>
    <BannerText/>
    <Blogs/>
    <Footer/>
    </UpdateFollower>
    </main>
  )
}

export default App