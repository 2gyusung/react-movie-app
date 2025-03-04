import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?language=en-US&page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page], // 여기 수정함
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (data) => {
      return data.data;
    },
  });
};