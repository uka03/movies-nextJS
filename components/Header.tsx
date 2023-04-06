import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <div className="w-full  bg-red-600">
      <div className="container mx-auto h-full p-4 flex justify-between items-center flex-wrap lg:flex-nowrap">
        <picture className="block h-[40px]">
          <img
            src="https://images.fandango.com/cms/assets/bf631b80-bf47-11ed-a868-adceb8892ad3--rt25-logo-mainnav-322x100.png"
            alt=""
            className="h-full"
          />
        </picture>
        <div className="w-4/12">
          <input
            type="text"
            className="w-full bg-red-800 text-white placeholder:text-white border-2 rounded-full px-5 py-2"
            placeholder="Search movies, TV, actors, more..."
          />
        </div>
        <div className="flex gap-4">
          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href="/movies"
          >
            MOVIES
          </Link>
          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href="/"
          >
            TV SHOWS
          </Link>
          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href=""
          >
            MOVIE TRIVIA
          </Link>
          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href=""
          >
            NEWS
          </Link>
          <Link
            className="py-3 px-5 rounded-xl hover:bg-white hover:text-black text-white font-bold"
            href=""
          >
            SHOWTIMES
          </Link>
        </div>
      </div>
    </div>
  );
}
