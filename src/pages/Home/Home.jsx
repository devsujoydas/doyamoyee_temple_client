 

import Hero from "../../components/Hero";
import About from "../../components/About";
import Events from "../../components/Events";
import Volunteer from "../../components/Volunteer"; 
// import Gallery from "../../components/Gallery";
import Blogs from "../Blogs/Blogs";
import PujaGallery from "../../components/PujaGallery";



const Home = () => {
  return (
    <div className="">

      <Hero />
      <About />
      <Events />
      <Volunteer />
      <PujaGallery />
      <Blogs />

    </div>
  )
}

export default Home