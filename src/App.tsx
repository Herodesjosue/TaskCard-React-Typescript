import {  useState } from "react";
import TaskList from "./components/TaskList";
import { Tasks } from "./interfaces/task";
import TaskForm from "./components/TaskForm";
import Topbar from "./components/Navbar";
function App() {
  const [tareas, setTareas] = useState<Tasks[]>([
    {
      id: 1,
      title: "Herodes",
      description: "Web Developer",
      completed: false,
    },
  ]);

  const newAddTask = (task: Tasks) => {
    setTareas([...tareas, task]);
  };

  const removeTask = (id: number) => {
    setTareas(tareas.filter((t) => t.id != id))
  };
  return (
    <div>
      <Topbar />
      <main className="container">
        <div className="row">
          <div className="col-lg-8 mt-2">
            <TaskList removeTaskid={removeTask} tareas={tareas} />
          </div>
          <div className="col-lg-4 mt-2">
            <TaskForm newAddTask={newAddTask} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
