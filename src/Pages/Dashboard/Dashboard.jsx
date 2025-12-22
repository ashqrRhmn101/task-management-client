import TaskBoard from "../../Components/TaskBoard";
import TaskForm from "../../Components/TaskForm";


export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Task Dashboard</h1>
      <TaskForm />
      <TaskBoard />
    </div>
  );
}
