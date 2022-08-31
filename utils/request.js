const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL ='https://api.themoviedb.org/3'

const requests = {
          fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
          fetchNetflixOriginals: `${BASE_URL}/movie/106912/similar?api_key=${API_KEY}&language=en-US`, 
          fetchUpcomingMovie: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`, 
          fetchActionMovies: `${BASE_URL}/movie/106912/similar?api_key=${API_KEY}&language=en-US`, 
          fetchComedyMovies: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`, 
          fetchHorrorMovies: `${BASE_URL}/movie/106912/similar?api_key=${API_KEY}&language=en-US`, 
          fetchRomanceMovies: `${BASE_URL}/movie/106912/similar?api_key=${API_KEY}&language=en-US`,
          fetchDocumentaries: `${BASE_URL}/movie/106912/similar?api_key=${API_KEY}&language=en-US`,   
          
          
          fetchMovieDetail: `${BASE_URL}/movie/{movie_id}?api_key=${API_KEY}&language=en-US`, 
}
export default requests

