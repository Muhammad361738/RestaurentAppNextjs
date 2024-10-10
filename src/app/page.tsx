import Navbar from "./Navbar/page";
import About from "./About/page"
import Manu from "./Menu/page"
import Table from "./Table/page"
import OnlineFood from "./OnlineFood/page"
import HomeSection from "./HomeSection/page"
import Contact from "./Contact/page"
import Footer from "./Footer/page"



export default function Home() {
  return (
    <div  > 
                <Navbar/>
                <HomeSection/>
                {/* <About/> */}
                <Manu/>
                <Table/>
                <OnlineFood/>
                <Contact/>
                <Footer />
            </div> 
         
  );
}
