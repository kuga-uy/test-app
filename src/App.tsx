import { useState } from "react";

function App() {
  const [task, setTask] = useState<Array<string>>([""]);
  const [value, setValue] = useState<string>('');

  const addTask = () => {
    setTask([...task, value]);
    setValue("");
  };

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  console.log(task);
  return (
    <div className="App">
      <input onChange={valueHandler} type="text" />
      <button onClick={addTask}>add task</button>
      <ul>
        {task.map((taskItem, i) => (
          <li style={ { listStyle: "none" } }key={i}>{taskItem.length > 0 ? `${i} - ${taskItem}` : ""}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
