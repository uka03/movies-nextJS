import Scroll from "@/components/Scroll";
import axios from "axios";
import { useEffect, useState } from "react";
import movieType from "./type/moviesType";

export default function Home(): JSX.Element | undefined {
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/movies?limit=24`).then((res): void => {
      setMovies([...movies, ...res.data]);
    });
  }, []);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gray-900">
      <div className="container mx-auto  max-w-screen-xl p-10 min-h-[90vh] flex  flex-wrap justify-between gap-5">
        <Scroll prop={movies} />
      </div>
    </div>
  );
}
