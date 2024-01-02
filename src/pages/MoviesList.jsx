import { Link } from "react-router-dom";
import { Back } from "./Header";
import { useState, useEffect } from "react";

function MoviesList() {
  const [search, setSearch] = useState("");
  const [pay, setPay] = useState([]);
  const [menu, setMenu] = useState();
  const [hide, setHide] = useState();
  const [favori, setFavori] = useState();

  useEffect(function () {
    fetch("https://yts.mx/api/v2/list_movies.json").then(function (res) {
      res.json().then(function (data) {
        console.log(data);
        setPay(data.data.movies);
        setGenre(data.movies.genres);
      });
    });
  }, []);

  return (
    <main
      className=" flex flex-col bg-black  relative 
     bg-no-repeat bg-cover min-h-screen min-w-full  "
    >
      <header className=" h-20 w-full bg-[#333] flex items-center justify-center ">
        <div className="relative flex items-center justify-star w-[25%] ml-3 ">
          <img
            className=" absolute w-4 left-2.5"
            src="/src/images/back.png"
            alt=""
          />
          <Back />
        </div>
        <div className=" w-[50%] flex items-center justify-center">
          <h1 className=" px-3 text-4xl text-yellow-400 font-semibold font-serif bg-gradient-to-br from-slate-900 to-yellow-500 text-transparent bg-clip-text ">
            Movies List
          </h1>
        </div>
        <div className=" w-[25%] flex items-center justify-end mr-3 ">
          <svg
            onClick={() => {
              setMenu(!menu);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path
              fill="#FACC1A"
              d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
            />
          </svg>
        </div>
      </header>

      {menu ? (
        <aside className="w-[30%] h-screen bg-[#222] flex flex-col items-end  absolute right-0 transition-all  rounded-bl-2xl rounded-tl-2xl">
          <div
            className="flex
           items-center justify-star w-full h-[10%] mb-20"
          >
            <img
              onClick={() => {
                setMenu(!menu);
              }}
              className=" ml-6 w-6 cursor-pointer "
              src="/src/images/close.png"
              alt=""
            />
          </div>

          <div className="flex flex-col items-center gap-2  w-full ">
            <ul className=" w-full flex flex-col items-center">
              <li className="                w-full  py-4 text-[22px] text-gray-500 hover:text-white font-semibold mb-1 rounded-lg  text-center  ">
                <Link
                  to=""
                  className="cursor-pointer flex
                 items-center justify-center gap-4"
                >
                  <img className=" w-5" src="/src/images/account.png" alt="" />
                  MyAccount
                </Link>
              </li>
              <div className="border-b-2 w-2/4 mb-8 border-yellow-500 mt-3"></div>
              <li className="                w-full  py-4 text-[22px] text-gray-500 hover:text-white font-semibold mb-1 rounded-lg  text-center">
                <Link
                  to="/Home"
                  className="flex
                 items-center justify-star ml-[35%]  gap-4 cursor-pointer"
                >
                  <img className=" w-5" src="/src/images/iconhome.png" alt="" />
                  Home
                </Link>
              </li>
              <li className="      bg-yellow-500      text-white                               text-[22px] w-full  py-4 hover:text-white font-semibold mb-1 rounded-lg  text-center">
                <Link
                  to=""
                  className="flex
                 items-center justify-star ml-[35%]  gap-4 cursor-pointer"
                >
                  <img className=" w-5" src="/src/images/menu.png" alt="" />
                  Movies List
                </Link>
              </li>
              <li className="            text-gray-500       text-[22px]  w-full  py-4 hover:text-white font-semibold mb-1 rounded-lg  text-center">
                <Link
                  to="/Mylist"
                  className="flex cursor-pointer
                 items-center justify-star ml-[35%]  gap-4"
                >
                  {" "}
                  <img
                    className=" w-5"
                    src="/src/images/2favorite(1).png"
                    alt=""
                  />{" "}
                  My List
                </Link>
              </li>
            </ul>
          </div>

          <div className="0px"></div>
        </aside>
      ) : (
        <aside className=" 0px"></aside>
      )}
      <div className=" w-full h-28 flex items-center justify-center">
        <div className="flex flex-col w-[70%] h-full justify-center">
          <label htmlFor="" className="text-white">
            Filter by genre:
          </label>
          <select onChange={() => {}} className=" w-full h-10 rounded-lg">
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Film Noir">Film Noir</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Music">Music</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sci_Fi">Sci_Fi</option>
            <option value="Short Film">Short Film</option>
            <option value="Sport">Sport</option>
            <option value="Superhero">Superhero</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
          </select>
        </div>
      </div>

      <section className=" w-full flex justify-center flex-wrap px-2">
        {pay.map((movie, i) => {
          return (
            <div
              key={i}
              className=" w-72 flex flex-col items-center justify-center bg-transparent h-[570px]  mt-10 rounded-lg overflow-hidden"
            >
              <article className="w-[265px] cursor-pointer flex flex-col justify-center overflow-hidden rounded-lg bg-black h-[520px] hover:w-full hover:h-full transition-all border-2 border-white">
                <div className=" w-full h-[60%]">
                  <img
                    src={movie.medium_cover_image}
                    alt=""
                    className=" h-full w-full"
                  />
                </div>

                <div className=" w-full h-[40%] flex flex-col text-white">
                  <div className=" w-full h-[55%] flex items-center justify-center">
                    <h1 className=" font-semibold text-[22px] text-center">
                      {movie.title}
                    </h1>
                  </div>
                  <div className=" w-full h[25%] flex items-center px-3 flex-wrap gap-2 justify-center">
                    <p className=" bg-[#333] px-2 py-1 rounded-lg">
                      {movie.genres && Object.values(movie.genres)[1]}
                    </p>
                  </div>
                  <div className="flex items-center justify-between  w-full h-[25%]  mt-1">
                    <Link
                      to="/Singlemovies"
                      className=" mb-2 mt-2 px-3 py-1 rounded-3xl text-yellow-500 font-medium  transition-all hover:underline decoration-2-2 "
                    >
                      Watch the Trailer
                    </Link>
                    <img
                      onClick={() => {
                        setFavori(!favori);
                      }}
                      className=" w-7 border-2 border-yellow-500 p-1 rounded-md mr-2"
                      src={
                        favori
                          ? "/src/images/star.png"
                          : "/src/images/1star.png"
                      }
                      alt="Favori"
                    />

                    <p className=" border-l-2 border-gray-500  mr-2 bor px-3 py-1  text-gray-500 ">
                      {movie.year}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </section>

      {/*   */}
    </main>
  );
}
export default MoviesList;
