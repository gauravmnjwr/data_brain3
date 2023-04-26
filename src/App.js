import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchedData = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = (id) => {
    const renderedData = data.filter((d) => {
      return d.id !== id;
    });
    setData(renderedData);
  };

  const renderedData = data.map((d) => {
    return (
      <div className="main-list" key={d.id}>
        <ul>
          <li>{d.title}</li>
        </ul>
        <img
          onClick={() => {
            handleDelete(d.id);
          }}
          src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
          alt=""
        />
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Todos</h1>
      <div>{renderedData}</div>
    </div>
  );
}

export default App;
