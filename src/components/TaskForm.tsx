import { ChangeEvent, FormEvent, useState } from "react";
import { Tasks } from "../interfaces/task";

interface Props {
  newAddTask: (task: Tasks) => void;
}

const initialState = {
  id: 0,
  title: "",
  description: "",
};
const TaskForm = ({ newAddTask }: Props) => {
  const [Task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...Task, [name]: value, id: Date.now() });
    // console.log(Task);
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newAddTask(Task);
    setTask(initialState);
  };

  return (
    <div
      className="card card-body bg-dark 
    text-dark
    "
    >
      <h1 className="text-white">add task</h1>
      <form action="" onSubmit={handleNewTask}>
        <label htmlFor=""></label>
        <input
          type="text"
          id="title"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0
          shadow-none border-0
          "
          value={Task.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          id="description"
          placeholder="write a description"
          className="form-control
        mb-3 shadow-none border-0
        "
          cols={20}
          rows={5}
          onChange={handleInputChange}
          value={Task.description}
        ></textarea>
        <button className="btn btn-secondary">Save me</button>
      </form>
    </div>
  );
};

export default TaskForm;
