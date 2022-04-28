import Newsletter from "../../components/Newsletter"
import SlideExplore from "../../components/Slick/SlideExplore"
import SlideHomeTop from "../../components/Slick/SlideHomeTop"
import SlideTeaEssentials from "../../components/Slick/SlideTeaEssentials"
import SlideTestimonial from "../../components/Slick/SlideTestimonial"
import SlideTrending from "../../components/Slick/SlideTrending"
import Survey from "../../components/Survey"

const Home = () => {
  return (
    <div className='App'>
      <SlideHomeTop />
      <SlideTrending slide/>
      <SlideTeaEssentials />
      <SlideTestimonial />
      <SlideExplore />
      <Survey />
      <Newsletter />
    </div>
  )
}

export default Home