import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

export const useTasks = () => {
  const queryClient = useQueryClient();
  const axios = axiosInstance;

  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("/tasks");
      return res.data;
    },
  });

  const createTask = useMutation({
    mutationFn: (data) => axios.post("/tasks", data),
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  const updateTask = useMutation({
    mutationFn: ({ id, data }) => axios.put(`/tasks/${id}`, data),

    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries(["tasks"]);

      const previousTasks = queryClient.getQueryData(["tasks"]);

      queryClient.setQueryData(["tasks"], (old) =>
        old.map((task) => (task._id === id ? { ...task, ...data } : task))
      );

      return { previousTasks };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(["tasks"], context.previousTasks);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  return {
    ...tasksQuery,
    createTask,
    updateTask,
  };
};
