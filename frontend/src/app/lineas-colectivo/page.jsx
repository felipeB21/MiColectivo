"use client";
import InputSearch from "@/components/InputSearch";
import SearchResultsList from "@/components/SearchResultsList";
import React, { useState } from "react";

export default function page() {
  const [results, setResults] = useState([]);
  return (
    <div className="mt-6">
      <h2 className="mb-6">
        Decinos a donde vas y te decimos que empresa de colectivo va hacia tu
        destino
      </h2>
      <InputSearch setResults={setResults} />
      <SearchResultsList results={results} />
    </div>
  );
}
