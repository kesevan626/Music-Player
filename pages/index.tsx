import type { NextPage } from 'next'
import Layout from '../Layout/Layout'
import Banner from '../components/Banner'
import Row from '../components/Row'


import requests from '../utils/request'
import { Movie } from '../typing'
interface props { 
               netflixOriginals: Movie[]
                trendingNow: Movie[]
                topRated: Movie[]
                actionMovies: Movie[]
                comedyMovies: Movie[]
                romanceMovie: Movie[]
                horrorMovie: Movie[]              
                Documentaries: Movie[]
}
const Home = ({
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        romanceMovie,
        horrorMovie,
       Documentaries
}: props) => {
//     console.log(comedyMovies)
      return (
                  <div className=" relative h-screen w-screen  lg:h-[140vh]">
                      <Layout>
                              <main className='relative top-0 left-0 w-screen space-y-18 h-screen lg:w-screen'>
                                        <Banner trendingNow={trendingNow} />
                                        <section className='absolute lg:top-[60%] top-[75%] '>

                                                <Row title=' Week`s Trend' movies={trendingNow} />
                                                <Row title='Upcoming Movies' movies={topRated} />
                                                <Row title='TV top-rated' movies={comedyMovies}/>
                                                <Row title='Action'  movies={topRated}  /> 
                                                
                                                {/* <Row title='Documentaries'movie={Documentaries}/> */}
                                        </section>
                                        
                              </main>
                      </Layout>
                  </div>
      )

}
export default Home

export const getServerSideProps =async () => {
        const [
                // netflixOriginals,
                trendingNow,
                topRated,
                // actionMovies,
                comedyMovies,
        //         romanceMovie,
        //         horrorMovie,
        //        Documentaries
        ] = await Promise.all ([
                // fetch(requests.fetchNetflixOriginals).then((res)=>res.json()),
                fetch(requests.fetchTrending).then((res)=>res.json()),
                fetch(requests.fetchUpcomingMovie).then((res)=>res.json()),
                fetch(requests.fetchComedyMovies).then((res)=>res.json()).catch((err)=>console.log(err)),
                // fetch(requests.fetchActionMovies).then((res)=>res.json()),
                
                // fetch(requests.fetchRomanceMovies).then((res)=>res.json()),
                // fetch(requests.fetchHorrorMovies).then((res)=>res.json()),
                // fetch(requests. fetchDocumentaries).then((res)=>res.json()),
        ])
        return {
                props: {
                        // netflixOriginals: netflixOriginals?.results || null,
                        trendingNow: trendingNow?.results,
                        topRated: topRated?.results,
                        // actionMovies: actionMovies?.results || null,
                        comedyMovies: comedyMovies?.results,
                        // romanceMovie: romanceMovie?.results || null,
                        // horrorMovie: horrorMovie?.results || null,
                        // Documentaries: Documentaries?.results || null,
                }
        }
}