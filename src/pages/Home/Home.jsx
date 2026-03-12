

import Hero from "../../components/Hero";
import About from "../../components/About";   
import BlogsSection from "./BlogsSection";
import LatestNotice from "./LatestNotice"; 
import UpcommingEvents from "./UpcommingEvents";



const Home = () => {
  return (
    <div className="">

      <Hero />
      <LatestNotice /> 
      {/* <About />  */}
      <UpcommingEvents />
      <BlogsSection />

    </div>
  )
}

export default Home