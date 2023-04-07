import Link from "next/link";
import movieType from "../pages/moviesType";

export default function Card(prop: movieType): JSX.Element {
  return (
    <Link
      className="w-[270px] h-[440px] flex justify-center items-center  "
      href={`movies/${prop._id}`}
    >
      <div className="w-full h-full hover:w-10/12 hover:h-5/6 transition-all duration-700 delay-200 hover:shadow-2xl hover:text-lg hover:shadow-white">
        <picture className=" h-[91%] block">
          <img src={prop.poster} className="w-full h-full" alt="" />
        </picture>
        <div className="w-full h-[9%] flex items-center justify-center text-xl  text-gray-400 box-border py-4">
          <p>{prop.title}</p>
        </div>
      </div>
    </Link>
  );
}
