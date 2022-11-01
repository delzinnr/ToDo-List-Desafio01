import styles from "./TaskList.module.css";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { EmptyList } from "./EmptyList";

export function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Estudar Javascript",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: "Estudar Typescript",
      isComplete: false,
    },
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      { id: uuidv4(), title: newTaskText, isComplete: false },
    ]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Impossível adicionar uma tarefa vazia!");
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id != taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  function handleToggleTaskCompletion(id: string) {
    const taskListCompleted = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });
    setTasks(taskListCompleted);
  }

  const completes = tasks.filter((task) => {
    return task.isComplete !== false;
  });

  const isNewTaskEmpty = newTaskText.length == 0;

  return (
    <main>
      <div className={styles.container}>
        <div>
          <form
            onSubmit={handleCreateNewTask}
            action=""
            className={styles.form}
          >
            <input
              value={newTaskText}
              name="task"
              placeholder="Adicione uma nova tarefa"
              type="text"
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button type="submit" disabled={isNewTaskEmpty}>
              Criar <PlusCircle size={16} />
            </button>
          </form>
        </div>
        <div className={styles.content}>
          <header className={styles.infos}>
            <div className={styles.info}>
              <span className={styles.title}>Tarefas criadas</span>
              <span className={styles.count}>{tasks.length}</span>
            </div>
            <div className={styles.info}>
              <span className={styles.title}>Concluídas</span>
              <span className={styles.count}>
                {completes.length} de {tasks.length}
              </span>
            </div>
          </header>
        </div>
        {
          tasks.length === 0 && <EmptyList />
        }
        {tasks.map((task) => {
          return (
            <Task
              handleToggleTaskCompletion={handleToggleTaskCompletion}
              isComplete={task.isComplete}
              id={task.id}
              key={task.id}
              title={task.title}
              onDeleteTask={deleteTask}
            />
          );
        })}
      </div>
    </main>
  );
}
