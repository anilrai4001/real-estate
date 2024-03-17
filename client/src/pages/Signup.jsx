import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-6">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 border rounded-xl"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 border rounded-xl"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 border rounded-xl"
        />
        <button className="bg-slate-800 text-white p-3 uppercase rounded-xl disabled:opacity-80 hover:opacity-90">
          Sign Up
        </button>
      </form>
      <div className="mt-4 flex gap-2">
        <p>Have an account?</p>
        <Link to={"/login"}>
          <span className="text-blue-700 hover:underline">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
