import { Tasks } from "../interfaces/task";

interface Props {
  tarea: Tasks;
  removeTaskid: (id: number) => void;
}
const TaskCard = ({ removeTaskid, tarea }: Props) => {
  return (
    <div className="card me-2" style={{ width: "12rem" }}>
      <div className="card-body">
        <h1 className="card-title">{tarea.title}</h1>
        <p className="card-text">{tarea.description}</p>
      </div>
      <button className="btn btn-danger" onClick={() => removeTaskid(tarea.id)}>
      Delete Me
      </button>
    </div>
  );
};

export default TaskCard;
