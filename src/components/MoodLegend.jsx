export default function MoodLegend() {
  const moods = [
    { emoji: "🔥", label: "Hype / Energy" },
    { emoji: "😢", label: "Sad / Emotional" },
    { emoji: "😴", label: "Chill / Relax" },
    { emoji: "💖", label: "Love / Romantic" },
    { emoji: "😡", label: "Angry / Intense" },
    { emoji: "🎉", label: "Party / Fun" },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-xl mt-6">
      <h2 className="text-lg font-semibold mb-2">Mood Guide</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
        {moods.map((m) => (
          <div key={m.emoji} className="flex items-center gap-2">
            <span className="text-xl">{m.emoji}</span>
            <span className="text-gray-300">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}