import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function LeaderboardPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const q = query(
        collection(db, "songs"),
        orderBy("votes", "desc"),
        limit(10)
      );

      const snapshot = await getDocs(q);
      setSongs(snapshot.docs.map((d) => d.data()));
    };

    fetchSongs();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-full max-w-lg">

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">🏆 Leaderboard</h1>
          <Link to="/" className="text-sm hover:text-pink-400">Back</Link>
        </div>

        <div className="flex flex-col gap-3">
          {songs.map((song, i) => (
            <div
              key={i}
              className="flex justify-between bg-gray-800 p-3 rounded-lg"
            >
              <span>
                {i + 1}. {song.title} - {song.artist}
              </span>
              <span className="text-green-400">{song.votes}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}