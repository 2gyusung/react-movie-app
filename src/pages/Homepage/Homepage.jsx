import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlider from './TopRatedMovieSlider/TopRatedMovieSlider'
// 배너 popular movie 들고와서 첫번째 아이템을 보여주자
// popular movie
// top rated movie
// upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
      <TopRatedMovieSlider/>
    </div>
  )
}

export default Homepage