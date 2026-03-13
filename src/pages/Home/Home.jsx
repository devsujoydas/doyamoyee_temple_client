

import Hero from "../../components/Hero";   
import About from "./About";
import BlogsSection from "./BlogsSection";
import LatestNotice from "./LatestNotice"; 
import UpcommingEvents from "./UpcommingEvents";



const Home = () => {
  return (
    <div className="">

      <Hero />
      <About /> 
      <LatestNotice /> 
      <UpcommingEvents />
      <BlogsSection />

    </div>
  )
}

export default Home