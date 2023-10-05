import Image from "next/image";
import styles from "../page.module.css";
import RefreshButton from "./RefreshButton";
import { useState, useEffect } from "react";
export default function Header() {
  function getInitialTheme() {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  }
  const [isToggleOn, setIsToggleOn] = useState<boolean>(getInitialTheme);
  const toggleClass = isToggleOn
    ? `${styles.themeToggle} ${styles.on}`
    : styles.themeToggle;

  const handleToggle = () => {
    const newToggleState = !isToggleOn;

    if (newToggleState) {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.removeAttribute("data-theme");
    }

    setIsToggleOn(newToggleState);
    localStorage.setItem("theme", JSON.stringify(newToggleState));
  };
  useEffect(() => {
    if (isToggleOn) {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [isToggleOn]);
  return (
    <header className={styles.mainHeader}>
      <div className={styles.header}>
        <Image
          className={styles.toDoImage}
          src="/to-do-list.png"
          alt="To Do List Image"
          title="Who are you looking at?"
          width={100}
          height={100}
        />
        <h1 className={styles.headerTitle}>My to do list</h1>
        <RefreshButton />
        <button className={toggleClass} onClick={handleToggle}>
          <span className={styles.slider}></span>
        </button>
      </div>
      <h1 className={styles.headerTitle}>My to do list</h1>
    </header>
  );
}
