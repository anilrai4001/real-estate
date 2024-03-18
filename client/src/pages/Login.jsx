import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFail, loginStart, loginSuccess } from "../app/user/userSlice";
import OAuth from "../components/OAuth";

function Login() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(loginStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(loginFail(data.message));
        console.log(data);
        return;
      }
      dispatch(loginSuccess(data));
      console.log(data);
      navigate("/");
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-6">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 border rounded-xl"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-800 text-white p-3 uppercase rounded-xl disabled:opacity-80 hover:opacity-90"
        >
          {loading ? "loading..." : "login"}
        </button>
        {error ? <p className="text-red-500">{error}</p> : null}
        <OAuth />
      </form>
      <div className="mt-4 flex gap-2">
        <p>Do not have an account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700 hover:underline">Signup</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
