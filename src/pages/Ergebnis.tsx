export default function Ergebnis() {
  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">🌞 Ergebnis</h2>
      <p>Dein Dach ist grundsätzlich für eine Solaranlage geeignet.</p>
      <p className="mt-2">Empfohlene Leistung: ca. 5–10 kWp</p>
      <p className="mt-4 text-green-600 font-semibold">💰 Einsparpotenzial: ca. 800 € / Jahr</p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Angebot anfordern
      </button>
    </div>
  );
}