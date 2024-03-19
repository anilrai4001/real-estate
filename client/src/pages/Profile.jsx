import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="font-semibold text-3xl text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full w-24 h-24 object-cover self-center mt-2 cursor-pointer"
        />
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
        <button
          
          className="bg-slate-800 text-white p-3 uppercase rounded-xl disabled:opacity-80 hover:opacity-90"
        >
          update
        </button>
        <div className="flex justify-between mt-4">
          <span className="text-red-700 cursor-pointer">Delete My Account</span>
          <span className="text-red-700 cursor-pointer">Sign Out</span>
        </div>
      </form>
    </div>
  );
}

export default Profile;
