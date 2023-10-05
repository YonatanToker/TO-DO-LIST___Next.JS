import React, { createContext } from "react";
import { ToDoContextType } from "./types";
export const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  handleRefresh: () => {},
  addTodo: () => {},
  removeTodo: () => {},
});
