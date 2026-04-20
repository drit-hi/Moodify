export default function SongCard({ song, onVote }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

      <img
        src={song.albumArt}
        className="w-full h-40 object-cover"
      />

      <div className="p-3">
        <h3 className="font-semibold">{song.title}</h3>
        <p className="text-sm text-gray-400">{song.artist}</p>

        <button
          onClick={() => onVote(song.id)}
          className="mt-3 w-full bg-green-500 py-1 rounded hover:bg-green-400"
        >
          👍 {song.votes}
        </button>
      </div>
    </div>
  );
}