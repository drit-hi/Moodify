import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-full max-w-md">

        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Link to="/" className="text-sm hover:text-pink-400">Back</Link>
        </div>

        <div className="mb-4">
          <p className="text-gray-400">Email</p>
          <p className="text-lg">{user?.email}</p>
        </div>

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-400 transition p-3 rounded-lg font-semibold"
        >
          Logout
        </button>

      </div>
    </div>
  );
}