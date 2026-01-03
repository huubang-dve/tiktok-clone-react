import { useState } from "react";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [listValue, setListValue] = useState("");

  const abc = list.map((item, index) => {
    return <li key={index}>{item.name}</li>;
  });

  const addList = () => {
    if (!listValue.trim()) return;
    setList([...list, { name: listValue }]);
    setListValue("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={listValue}
        onChange={(e) => setListValue(e.target.value)}
      />
      <button onClick={addList}>Add</button>
      <ul>{abc}</ul>
    </div>
  );
};

export default App;
