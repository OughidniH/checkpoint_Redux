import { useSelector } from "react-redux";
import "./App.css";
import AddToDo from "./Components/AddToDo.js";
import ListTask from "./Components/ListTask.js";

function App() {
  const tasks = useSelector((state) => state.reducersToDo.tasks);
 
  return (
    <div className="App">
      <AddToDo />

      <ListTask tasks={tasks} />
    </div>
  );
}

export default App;
