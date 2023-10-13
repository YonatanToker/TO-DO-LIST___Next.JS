"use client";

import Header from "./Components/Header";
import React, { useState, useContext, useEffect } from "react";
import { ToDoContext } from "./createContext";
import { TimeTaskType } from "./types";
import Main from "./Components/Main";
export default function Home() {
  const [todos, setTodos] = useState<TimeTaskType[]>([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(items);
  }, []);
  const handleRefresh = () => {
    setTodos((prevTodos) => []);
    localStorage.setItem("todos", "[]");
  };
  const addTodo = (todo: TimeTaskType) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const removeTodo = (indexToRemove: number) => {
    const newTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const context = {
    todos,
    handleRefresh,
    addTodo,
    removeTodo,
  };
  return (
    <>
      <ToDoContext.Provider value={context}>
        <Header />
        <Main />
      </ToDoContext.Provider>
    </>
  );
}
