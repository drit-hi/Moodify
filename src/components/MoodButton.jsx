export default function MoodButton({ emoji, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-2xl px-4 py-2 rounded-xl transition ${
        selected
          ? "bg-pink-500 scale-110 shadow-lg"
          : "bg-gray-800 hover:bg-gray-700"
      }`}
    >
      {emoji}
    </button>
  );
}