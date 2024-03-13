import { useEffect, useState } from "react";
import { BookTable } from "./BookTable";

export function App() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((json) => setTable(json))
      .catch();
  }, [table]);

  return (
    <div>
      <BookTable data={table} />
    </div>
  );
}
