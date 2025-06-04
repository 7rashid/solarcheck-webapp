import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Formular() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    plz: "",
    dachform: "",
    flaeche: "",
    neigung: 30,
    verschattung: 20,
    verbrauch: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold mb-4">🏡 Solar-Check Formular</h2>

      <input
        className="w-full border rounded p-2"
        name="plz"
        placeholder="Postleitzahl"
        value={formData.plz}
        onChange={handleChange}
      />

      <select
        className="w-full border rounded p-2"
        name="dachform"
        value={formData.dachform}
        onChange={handleChange}
      >
        <option value="">Dachform wählen</option>
        <option value="flachdach">Flachdach</option>
        <option value="satteldach">Satteldach</option>
        <option value="pultdach">Pultdach</option>
        <option value="walmdach">Walmdach</option>
      </select>

      <input
        className="w-full border rounded p-2"
        name="flaeche"
        placeholder="Dachfläche in m²"
        type="number"
        value={formData.flaeche}
        onChange={handleChange}
      />

      <label>Neigungswinkel: {formData.neigung}°</label>
      <input
        className="w-full"
        type="range"
        name="neigung"
        min="0"
        max="60"
        value={formData.neigung}
        onChange={handleChange}
      />

      <label>Verschattung: {formData.verschattung}%</label>
      <input
        className="w-full"
        type="range"
        name="verschattung"
        min="0"
        max="100"
        value={formData.verschattung}
        onChange={handleChange}
      />

      <input
        className="w-full border rounded p-2"
        name="verbrauch"
        placeholder="Stromverbrauch (kWh/Jahr)"
        type="number"
        value={formData.verbrauch}
        onChange={handleChange}
      />

      <button
        className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        onClick={() => navigate("/ergebnis")}
      >
        Weiter zu Ergebnis
      </button>
    </div>
  );
}