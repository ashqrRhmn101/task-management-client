import { useTasks } from "../Hooks/useTasks";
import TaskCard from "./TaskCard";


export default function TaskBoard() {
  const { data, isLoading, isError } = useTasks();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading tasks</p>;
  if (!data.length) return <p>No tasks found</p>;

  return (
    <div className="space-y-4">
      {data.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}
