import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface TaskProps {
  id: string;
  title: string;
  onDeleteTask: (task: string) => void;
  handleToggleTaskCompletion: (id: string) => void;
  isComplete: boolean;
}

export function Task({
  title,
  onDeleteTask,
  id,
  handleToggleTaskCompletion,
  isComplete
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <input
        defaultChecked={isComplete}
        onClick={() => handleToggleTaskCompletion(id)}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id}>{title}</label>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
