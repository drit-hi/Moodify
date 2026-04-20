import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AddSongPage() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [mood, setMood] = useState("🔥");
  const [albumArt, setAlbumArt] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title || !artist || !albumArt) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "songs"), {
        title,
        artist,
        mood,
        albumArt,
        votes: 0,
      });

      alert("Song added successfully!");

      // clear form
      setTitle("");
      setArtist("");
      setAlbumArt("");

      // redirect to discover page
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error adding song");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Song 🎵
        </h1>

        <div className="flex flex-col gap-4">

          {/* Title */}
          <input
            type="text"
            placeholder="Song Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Artist */}
          <input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Album Art */}
          <input
            type="text"
            placeholder="Album Art URL"
            value={albumArt}
            onChange={(e) => setAlbumArt(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Mood Selector */}
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white"
          >
            <option value="🔥">🔥 Hype</option>
            <option value="😢">😢 Sad</option>
            <option value="😴">😴 Chill</option>
            <option value="💖">💖 Love</option>
            <option value="😡">😡 Angry</option>
            <option value="🎉">🎉 Party</option>
          </select>

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="bg-pink-500 hover:bg-pink-400 transition p-3 rounded-lg font-semibold"
          >
            Add Song
          </button>
        </div>

      </div>
    </div>
  );
}