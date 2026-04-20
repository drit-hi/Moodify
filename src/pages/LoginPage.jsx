import { auth } from "../services/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  const loginEmail = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Login</h1>

      <input
        placeholder="Email"
        className="p-2 text-black"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 text-black"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={loginEmail} className="bg-blue-500 px-4 py-2">
        Login
      </button>

      <button onClick={loginGoogle} className="bg-red-500 px-4 py-2">
        Google Login
      </button>
    </div>
  );
}