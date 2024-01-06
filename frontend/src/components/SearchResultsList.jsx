export default function SearchResultsList({ results }) {
  return (
    <div className="mt-4">
      {results ? (
        results.map((result, id) => (
          <div
            className="bg-neutral-900 border border-neutral-700 p-3 flex flex-col gap-4"
            key={id}
          >
            <h2 className="text-xl font-bold">
              Vas para:{" "}
              <span className="text-lg font-medium">
                {result.trip_headsign}
              </span>
            </h2>
            <p className="text-xl font-bold">
              Colectivo que te lleva:{" "}
              <span className="text-lg font-medium">{result.agency_name}</span>
            </p>
          </div>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
