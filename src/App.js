import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetail from './pages/MovieDetail/MovieDetail';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

// 홈페이지 /
// 영화 전체 보여주는 페이지 /movies
// 영화 디테일 페이지 /movies/:id
// 추천 영화 /movies/:id/recommendation
// 리뷰 /movies/:id/reviews
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
