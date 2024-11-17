import { OuterButton } from "../../chat-button/OuterButton"
import AboutUs from "../../components/AboutUs/AboutUs"
import CompanyUse from "../../components/CompanyUse/CompanyUse"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/HeroSection/HeroSection"
import Navbar from "../../components/Navbar/Navbar"
import Price from "../../components/Plan/Price"



function HomePage() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <OuterButton/>
        <CompanyUse/>
        <Price/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default HomePage