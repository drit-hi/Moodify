import { Link } from "react-router-dom";
import { useMood } from "../context/MoodContext";
import MoodButton from "../components/MoodButton";
import SongCard from "../components/SongCard";
import { useMoodSongs } from "../hooks/useMoodSongs";
import MoodLegend from "../components/MoodLegend";

const moods = ["🔥", "😢", "😴", "💖", "😡", "🎉"];

export default function DiscoverPage() {
  const { mood, setMood } = useMood();
  const { songs, voteSong } = useMoodSongs(mood);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Vibe Check 🎧</h1>

          <div className="flex gap-4 text-sm">
            <Link to="/leaderboard" className="hover:text-pink-400">Leaderboard</Link>
            <Link to="/add" className="hover:text-pink-400">Add Song</Link>
            <Link to="/profile" className="hover:text-pink-400">Profile</Link>
          </div>
        </div>

        {/* MOODS */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {moods.map((m) => (
            <MoodButton
              key={m}
              emoji={m}
              selected={m === mood}
              onClick={() => setMood(m)}
            />
          ))}
        </div>

        {/* SONG GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} onVote={voteSong} />
          ))}
        </div>

        <MoodLegend />
      </div>
    </div>
  );
}