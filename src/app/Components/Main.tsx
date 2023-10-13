import styles from "../page.module.css";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import { ToDoContext } from "../createContext";
import { TimeTaskType } from "../types";
export default function Main(): React.JSX.Element {
  const context = useContext(ToDoContext);
  const [todos, setTodos] = useState(context.todos);
  useEffect(() => {
    setTodos(context.todos);
  }, [context]);
  const handleCreateTodo = () => {
    if (areInputFieldsEmpty()) {
      alert("You need to provide both the time and description to the list");
      return;
    }
    context.addTodo(timeTask);
    setTimeTask({ time: "", description: "" });
  };
  const handleRemoveTodo = (index: number) => {
    context.removeTodo(index);
  };
  function renderingAllToDoItems(): React.JSX.Element {
    return (
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.toDoItems}>
            <span className={styles.timeSpan} title="time">
              {todo.time}
            </span>
            <span className={styles.descriptionSpan} title="description">
              {todo.description}
            </span>

            <Image
              className={styles.deleteImg}
              src="/Red_X.svg.png"
              alt="delete"
              title="delete"
              width={15}
              height={15}
              onClick={() => handleRemoveTodo(index)}
            />
          </li>
        ))}
      </ul>
    );
  }
  const [timeTask, setTimeTask] = useState<TimeTaskType>({
    time: "",
    description: "",
  });
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setTimeTask((prevTimeTask) => ({
      ...prevTimeTask,
      [name]: value,
    }));
  }
  const areInputFieldsEmpty = () => {
    return timeTask.description === "" || timeTask.time === "" ? true : false;
  };

  return (
    <main>
      <div className={styles.inputsButtonContainer}>
        <input
          className={styles.inputF}
          type="text"
          name="time"
          placeholder="When is the task?"
          value={timeTask.time}
          onChange={handleChange}
        />
        <input
          className={styles.inputF}
          type="text"
          name="description"
          placeholder="What is the task?"
          value={timeTask.description}
          onChange={handleChange}
        />
        <button className={styles.createToDoBtn} onClick={handleCreateTodo}>
          Create TO-DO
        </button>
      </div>
      <hr />
      <div className={styles.listContainer}>
        <div className={styles.listContainerTitle}>
          <h1 className={styles.listTitle}>The list:</h1>
        </div>
        {renderingAllToDoItems()}
      </div>
      <div className={styles.AbigailContainer}>
        <h1>Abigail's container</h1>
        <img className={styles.kapibarara} src="/kapibara.jpg" alt="kapibara" />
      </div>
    </main>
  );
}
