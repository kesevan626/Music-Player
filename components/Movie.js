import axios from 'axios';



export const Movie = ({movie}) =>{
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const BASE_URL ='https://api.themoviedb.org/3'

        const getMovieDetail = ()=>{
            axios.get(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=en-US`)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
        }
     
          return (
                    <div>
                            <div className='relative rounded lg:h-28  h-[150px] min-w-[130px] text-white lg:h-[150px] lg:min-w-[150px]' 
                                key={movie.id}
                                onClick={getMovieDetail(movie.id)}
                                >                       
                                <div className='relative h-[120px] lg:h-[150px]'>
                                        <h2 className='text-white absolute top-0 right-0'>
                                            {movie?.title || movie.original_title || movie?.name}
                                        </h2>
                                    <img 
                                        className=''
                                        style={{height: '100%', width: '100%',objectFit: 'cover'}}
                                        src={'https://image.tmdb.org/t/p/original' +(movie?.backdrop_path || movie?.poster_path)} 
                                    />
                                </div>       
                            </div>
                    </div>
          )
}