import { useState } from "react";

function App() {
  const [task, setTask] = useState<Array<string>>([""]);
  const [value, setValue] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true)

  const addTask = () => {
   
      setDisabled(false)
      setTask([...task, value]);
      setValue("");

    
  };

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    e.target.value.length > 2
    ? setDisabled(false) 
    : setDisabled(true)
  };

  console.log(task);
  return (
    <div className="App">
      <input onChange={valueHandler} type="text" />
      <button onClick={addTask}disabled={disabled}>add task</button>
      <ul>
        {task.map((taskItem, i) => (
          <li style={ { listStyle: "none" } }key={i} value={value}>{`${i} - ${taskItem}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
