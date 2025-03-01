import React from 'react'
import { Alert } from 'react-bootstrap'
import MovieSlider from '../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../constants/responsive'
import { useUpcomingMoviesQuery } from '../../../hooks/useUpcomingMovies'

const UpComingMovieSlider = () => {
  const {data,isLoading,isError, error} =useUpcomingMoviesQuery()
  if(isLoading) {
    return <h1>Loading...</h1>
  }if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
   
    <div>
      <MovieSlider
       title='UpCommming Movies'
        movies={data.results}
         responsive={responsive}/>
    </div>
  )
}

export default UpComingMovieSlider