"using client";
import styles from "../page.module.css";
import React, { useContext } from "react";
import { ToDoContext } from "../createContext";
export default function RefreshButton() {
  const context = useContext(ToDoContext);
  function handleRefresh() {
    context.handleRefresh();
  }

  return (
    <button
      className={styles.headerRefresh}
      onClick={handleRefresh}
      title="Clear list"
    >
      Refresh
    </button>
  );
}
