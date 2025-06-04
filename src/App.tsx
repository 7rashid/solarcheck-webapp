import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">🔆 Solar-Check</h1>
      <p className="mb-4">Ist dein Dach für eine Solaranlage geeignet?</p>
      <button
        onClick={() => navigate("/formular")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Solar-Check starten
      </button>
    </div>
  );
}