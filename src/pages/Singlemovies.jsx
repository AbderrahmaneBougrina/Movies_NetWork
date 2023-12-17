import { Link } from "react-router-dom";
import { Back } from "./Header";
import { Title } from "./Header";

function Singlemovies() {
  return (
    <main className=" min-h-screen min-w-full font-semibold font-serif">
      <header className=" h-20 w-full bg-[#333] flex items-center justify-center ">
        <div className="relative flex items-center justify-star w-[50%] ml-3">
          <img
            className=" absolute w-4 left-2.5"
            src="/src/images/back.png"
            alt=""
          />
          <Back />
        </div>
        <div className="w-[50%] flex items-center justify-end mr-3">
          <Title />
        </div>
      </header>
      <section className=" min-h-screen bg-black flex justify-center ">
        <article className="flex flex-col items-center justify-around h-[500px]">
          <h1 className="text-[32px] text-white">Trailer : One piece</h1>
          <iframe
            className=" rounded-3xl shadow-lg shadow-gray-400"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/78WIYzX_m98?si=g3uDwIGNlYK9dEY-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </article>
      </section>
    </main>
  );
}
export default Singlemovies;
