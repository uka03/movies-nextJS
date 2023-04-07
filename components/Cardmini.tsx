import movieType from "@/pages/moviesType";
import Link from "next/link";

export default function Cardmini(prop: movieType): JSX.Element {
  return (
    <Link
      className="min-w-[170px] max-h-[240px] flex justify-center items-center  "
      href={`movies/${prop._id}`}
    >
      <div className="w-full h-full ">
        <picture className=" h-[91%] block">
          <img src={prop.poster} className="w-full h-full" alt="" />
        </picture>
        <div className="w-full h-[9%] flex items-center justify-center text-sm  text-gray-400 box-border py-4">
          <p>{prop.title}</p>
        </div>
      </div>
    </Link>
  );
}
