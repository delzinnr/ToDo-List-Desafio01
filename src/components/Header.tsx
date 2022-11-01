import styles from "./Header.module.css";
import todoLogo from "../assets/logo-todo.svg";

export function Header() {
  return (
    <header>
      <div className={styles.content}>
        <img src={todoLogo} alt="LOgo" />
      </div>
    </header>
  );
}
