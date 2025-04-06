import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import requests from "../utils/requests";
import { Movie } from "../typings";
import Row from "../components/Row";
import useAuth from '../hooks/useAuth'
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/Modal";

interface Props {
    netflixOriginals: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
    actionMovies: Movie[]
    comedyMovies: Movie[]
    horrorMovies: Movie[]
    romanceMovies: Movie[]
    documentaries: Movie[]
    animationMovies: Movie []
    dramaMovies: Movie []
    fantasyMovies: Movie []
    scienceFictionMovies: Movie []
    tVMovieMovies: Movie []
    warMovies: Movie []
    tvShows: Movie[]
  
}

const Home = ({   netflixOriginals,
  
  comedyMovies,
  actionMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
animationMovies,
dramaMovies,
fantasyMovies,
scienceFictionMovies,
tVMovieMovies,
warMovies,
tvShows,
 }: Props) => {

  const { loading } = useAuth()
  const showModal = useRecoilValue(modalState)

  if (loading) return null

  return (
    <div className="relitive h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
        <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
          <Row title="Animated Movies" movies={animationMovies} />
          <Row title="Drama" movies={dramaMovies} />
          <Row title="Fantasy" movies={fantasyMovies} />
          <Row title="Sci/Fi" movies={scienceFictionMovies} />
          <Row title="TV Movies" movies={tVMovieMovies} />
          <Row title="War" movies={warMovies} />
          <Row title="TV Shows" movies={tvShows} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    animationMovies,
dramaMovies,
fantasyMovies,
scienceFictionMovies,
tVMovieMovies,
warMovies,
tvShows,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    fetch(requests.fetchAnimationMovies).then((res) => res.json()),
    fetch(requests.fetchDramaMovies).then((res) => res.json()),
    fetch(requests.fetchFantasyMovies).then((res) => res.json()),
    fetch(requests.fetchScienceFictionMovies).then((res) => res.json()),
    fetch(requests.fetchTVMovieMovies).then((res) => res.json()),
    fetch(requests.fetchWarMovies).then((res) => res.json()),
    fetch(requests.fetchTvShows).then((res) => res.json()),
  ]);
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      animationMovies: animationMovies.results,
      dramaMovies: dramaMovies.results,
      fantasyMovies: fantasyMovies.results,
      scienceFictionMovies: scienceFictionMovies.results,
      tVMovieMovies:tVMovieMovies.results,
      warMovies:warMovies.results,
      tvShows: tvShows.results,
    },
  };
};
