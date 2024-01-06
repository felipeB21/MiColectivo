import { useState } from "react";

export default function InputSearch({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:3030/api/data")
      .then((req) => req.json())
      .then((data) => {
        const results = data.filter((item) => {
          return (
            value &&
            item &&
            item.trip_headsign &&
            item.trip_headsign.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="flex items-center justify-center py-4">
      <form>
        <input
          className="px-4 py-2 border bg-neutral-900 rounded-xl border-neutral-700 w-[340px]"
          type="text"
          name="searchApi"
          placeholder="¿A donde queres ir?"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  );
}
