import { Link } from "react-router-dom";

export function LinkLogin() {
  return (
    <Link
      to="/Login"
      className="font-sans font-black px-7 py-3 border-2 border-yellow-400 rounded-xl text-yellow-400 hover:bg-yellow-400 hover:text-[#333] transition-all "
    >
      Login
    </Link>
  );
}
function LinkSignup() {
  return (
    <Link
      to="/Signup"
      className="font-sans font-black px-7 py-3 border-2 border-yellow-400 rounded-xl text-yellow-400 hover:bg-yellow-400 hover:text-[#333] transition-all "
    >
      Signup
    </Link>
  );
}
export default LinkSignup;

export function Back(props) {
  return (
    <Link
      className="font-sans font-black px-8 py-2 border-2 border-yellow-400 rounded-xl text-yellow-400 hover:bg-yellow-400 hover:text-[#333] transition-all  "
      to="/Home"
      {...props}
    >
      Back
    </Link>
  );
}
export function Title() {
  return (
    <h1 className=" px-3 text-4xl text-yellow-400 font-semibold font-serif bg-gradient-to-br from-slate-900 to-yellow-500 text-transparent bg-clip-text ">
      Movies NetWork
    </h1>
  );
}
