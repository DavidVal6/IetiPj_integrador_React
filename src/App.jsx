import './App.css'
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {

  const taskTodo = [
    {name: 'Estudiar React'},
    {name: 'Hacer ejercicio'},
  ];

  return (
    <div className="App">
      <Header />
      <TaskList list={taskTodo}/>
    </div>
  );
}

export default App;
