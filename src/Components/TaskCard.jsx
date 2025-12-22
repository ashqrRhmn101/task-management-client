import React from "react";
import { useTasks } from "../Hooks/useTasks";

const TaskCard = ({ task }) => {
  const { updateTask } = useTasks();

  return (
    <div className="card bg-base-100 shadow p-4 flex flex-row justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm opacity-70">{task.priority}</p>
      </div>

      <select
        value={task.status}
        onChange={(e) =>
          updateTask.mutate({
            id: task._id,
            data: { status: e.target.value },
          })
        }
        className="select select-bordered select-sm"
      >
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>
    </div>
  );
};

export default TaskCard;
