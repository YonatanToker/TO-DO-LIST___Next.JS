export type TimeTaskType = {
  time: string;
  description: string;
};
export type ToDoContextType = {
  todos: TimeTaskType[];
  handleRefresh: () => void;
  addTodo: (todo: TimeTaskType) => void;
  removeTodo: (index: number) => void;
};
