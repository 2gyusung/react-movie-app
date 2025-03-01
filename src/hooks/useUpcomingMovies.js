import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const useUpcomingMovies = () => {
  return api.get(`/movie/upcoming?language=en-US&page=1`)
}
export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcomming"],
    queryFn : useUpcomingMovies,
    select : (data) => {
      return data.data;
    }
  })

}
