import axios from "axios";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import movieType from "./type/moviesType";

export default function Movies(): JSX.Element | undefined {
  const [movies, setMovies] = useState<movieType[]>([]);
  const [limit, setlimit] = useState<number>(8);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/movies?limit=${limit}`)
      .then((res): void => {
        setMovies([...movies, ...res.data]);
      });
  }, [limit]);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (movies) {
    return (
      <div className="w-[100vw] min-h-[100vh] bg-gray-900">
        <div className="container mx-auto  max-w-screen-xl p-10 min-h-[90vh] flex  flex-wrap justify-between gap-5">
          <div className="">
            <button>newest</button>
          </div>
          <div className="flex  flex-wrap justify-between gap-5">
            {" "}
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
        <button
          className="bg-white p-5 text-black ms-[50%] w-[200px]"
          onClick={() => {
            setlimit(limit + 8);
          }}
        >
          more
        </button>
      </div>
    );
  }
}
