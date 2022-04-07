import Newsletter from "../../components/Newsletter"
import SlideExplore from "../../components/slick/SlideExplore"
import SlideHomeTop from "../../components/slick/SlideHomeTop"
import SlideTeaEssentials from "../../components/slick/SlideTeaEssentials"
import SlideTestimonial from "../../components/slick/SlideTestimonial"
import SlideTrending from "../../components/slick/SlideTrending"
import Survey from "../../components/Survey"

const Home = () => {
  return (
    <div className='App'>
      <SlideHomeTop />
      <SlideTrending />
      <SlideTeaEssentials />
      <SlideTestimonial />
      <SlideExplore />
      <Survey />
      <Newsletter />
    </div>
  )
}

export default Home