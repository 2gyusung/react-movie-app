import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'


const MovieCard = ({movie}) => {

  const {data:genreData} =useMovieGenreQuery()
  console.log(genreData);

  const showGenre = (genreIdList)=> {
  if(!genreData) return [] // 도착한 데이터가 없을 시 빈배열로 표시 안하겠다
  const genreNameList = genreIdList.map((id)=> {
  const generObj =  genreData.find((genre)=>genre.id === id)
    return generObj.name;
  })
  return genreNameList;
  } 
  
  return (
    <div 
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w260_and_h390_bestv2${movie.poster_path})`
    }} 
    className='movie-card'
  >
      <div className='overlay'>
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((id) => (
  <Badge key={id} bg="danger">{id}</Badge>
))}
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.popularity}</div>
          <div>{movie.adult? 'over18': "under18"}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard