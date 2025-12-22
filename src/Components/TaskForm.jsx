import { useForm } from "react-hook-form";
import { useTasks } from "../Hooks/useTasks";
import React from "react";

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createTask } = useTasks();

  const onSubmit = (data) => {
    createTask.mutate({
      ...data,
      userId: "PUT_USER_ID_HERE",
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card bg-base-100 shadow p-4 space-y-3"
    >
      <input
        {...register("title", { required: true })}
        placeholder="Task title"
        className="input input-bordered w-full"
      />
      {errors.title && <p className="text-red-500">Title is required</p>}

      <select
        {...register("priority")}
        className="select select-bordered w-full"
      >
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>

      <button className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default TaskForm;
