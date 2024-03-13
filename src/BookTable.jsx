export function BookTable({ data }) {
  function handleErase(targetIndex) {
    

  }

  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>
          {el.id}
          <button onClick={() => handleErase(el.id)}> Erase</button>
        </li>
      ))}
    </ul>
  );
}
