 

import Hero from "../../components/Hero";
import About from "../../components/About"; 
import Volunteer from "../../components/Volunteer";  
import Blogs from "../Blogs/Blogs";
import PujaGallery from "../../components/PujaGallery";



const Home = () => {
  return (
    <div className="">

      <Hero />
      <About />
      {/* <Events /> */}
      {/* <Volunteer /> */}
      <PujaGallery />
      <Blogs />

    </div>
  )
}

export default Home