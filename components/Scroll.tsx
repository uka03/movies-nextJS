import movieType from "@/pages/moviesType";
import Cardmini from "./Cardmini";

export default function Scroll({ prop }: movieType[]) {
  return (
    <div className=" w-full gap-10 h-[260px]  flex overflow-scroll scrollbar-hide">
      {prop.map((movie: movieType, index: number) => (
        <div className="" key={index}>
          <Cardmini {...movie} />
        </div>
      ))}
    </div>
  );
}
