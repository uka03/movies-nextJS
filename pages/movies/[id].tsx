import axios from "axios";
import { GetStaticPropsContext } from "next";

import movieType from "../type/moviesType";

export default function MoviePage({
  data: movie,
}: {
  data: movieType;
}): JSX.Element {
  // const router: NextRouter = useRouter();
  // const id: string[] | string | undefined = router.query.id;
  // const [movie, setMovies] = useState<movieType>();

  // useEffect(() => {
  //   id &&
  //     axios
  //       .get(`http://localhost:8080/movies?id=${id}`)
  //       .then((res) => setMovies(res.data));
  // }, [id]);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (movie) {
    return (
      <div className="w-[100vw] min-h-[100vh] bg-gray-900">
        <div className="container mx-auto  max-w-screen-xl p-10 min-h-[90vh] flex gap-10">
          <picture className="w-1/2  block">
            <img src={movie.poster} alt="" className="w-full" />
          </picture>
          <div className="text-white w-1/2">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p>plot: {movie.fullplot}</p>
            <p>year: {movie.year}</p>
            <p className="flex gap-2">
              genres :
              {movie.genres.map(
                (genre: string, index: number): JSX.Element => (
                  <span key={index}>{genre}</span>
                )
              )}
            </p>
            <p>runtime: {movie.runtime}</p>
            <p className="flex gap-4">
              Cast:
              {movie.cast.map(
                (cast: string, index: number): JSX.Element => (
                  <span key={index}>{cast}</span>
                )
              )}
            </p>
            <p className="flex gap-3">
              language:
              {movie.languages.map(
                (lang: string, index: number): JSX.Element => (
                  <span key={index}>{lang}</span>
                )
              )}
            </p>
            <p className="flex gap-3">
              directors:
              {movie.directors.map(
                (dire: string, index: number): JSX.Element => (
                  <span key={index}>{dire}</span>
                )
              )}
            </p>
            <p className="flex gap-3">
              countries:
              {movie.countries.map(
                (countrie: string, index: number): JSX.Element => (
                  <span key={index}>{countrie}</span>
                )
              )}
            </p>
            <p>rated: {movie.rated}</p>
            <div className="flex gap-3">
              award:
              <div className="">
                <p>nominations: {movie.awards.nominations}</p>
                <p>text: {movie.awards.text}</p>
                <p>wins: {movie.awards.wins}</p>
              </div>
            </div>
            <div className="flex gap-3">
              imdb:
              <div className="">
                <p>id: {movie.imdb.id}</p>
                <p>rating: {movie.imdb.rating}</p>
                <p>votes: {movie.imdb.votes}</p>
              </div>
            </div>

            <p>type: {movie.type}</p>
          </div>
        </div>
      </div>
    );
  }
  return <div className="">loading</div>;
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:8080/movies_ids");
  const data = res.data;
  const paths = await data.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const res = await axios.get(`http://localhost:8080/movies?id=${params?.id}`);
  const movie = res.data;
  return { props: { data: movie } };
}
