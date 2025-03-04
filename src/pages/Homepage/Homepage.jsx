import React, { useEffect, useState } from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlider from './TopRatedMovieSlider/TopRatedMovieSlider'
import UpComingMovieSlider from './UpComingMovieSlider/UpComingMovieSlider'
// 배너 popular movie 들고와서 첫번째 아이템을 보여주자
// popular movie
// top rated movie
// upcoming movie
const Homepage = () => {


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <div>
      <Banner/>
      <div className={isMobile ? "px-3" :"px-5"}>
      <PopularMovieSlide/>
      <TopRatedMovieSlider/>
      <UpComingMovieSlider/>
        </div>     
    </div>
  )
}

export default Homepage