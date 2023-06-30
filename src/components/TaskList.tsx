import { Tasks } from "../interfaces/task";
import TaskCard from "./TaskCard";

interface Props {
  tareas: Tasks[],
  removeTaskid: (id:number)=>void
}

const TaskList = ({ removeTaskid, tareas }: Props) => {
  return (
    <div className="d-flex flex-wrap">
      {tareas.map((t) => {
        return (
          <div key={t.id}>
            <TaskCard tarea={t} removeTaskid={removeTaskid} />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
