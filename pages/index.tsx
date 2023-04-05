import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import movieType from "./type/moviesType";

export default function Home(): JSX.Element | undefined {
  const [movies, setMovies] = useState<movieType[]>([]);
  useEffect(() => {
    axios.get("http://localhost:8080/movies").then((res) => {
      setMovies(res.data);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (movies) {
    return (
      <div className="w-[100vw] min-h-[100vh] bg-gray-900">
        <div className="container mx-auto  max-w-screen-xl p-10 min-h-[90vh] flex  flex-wrap justify-between gap-5">
          {movies.map(
            (movie: movieType, index: number): JSX.Element => (
              <div className="" key={index}>
                {" "}
                <Card {...movie} />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
