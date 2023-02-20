import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Header } from "./components/Header";
import { TasksPanel } from "./components/TasksPanel";

import { PlusCircle } from "phosphor-react";
import styles from "./App.module.scss";

export interface TasksList {
  id: string;
  content: string;
  isDone: boolean;
}

const initialTasksList: TasksList[] = [];

export function App() {
  const [tasksList, setTasksList] = useState(initialTasksList);
  const [taskText, setTaskText] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasksList((state) => [
      ...state,
      { id: uuidV4(), content: taskText, isDone: false },
    ]);
    setTaskText("");
  }

  function onDoneTask(taskId: string) {
    const tasksListWithDoneTask = tasksList.map((task) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
      }
      return task;
    });

    setTasksList(tasksListWithDoneTask);
  }

  function onDeleteTask(taskId: string) {
    const tasksListWithDeletedOne = tasksList.filter((task) => {
      if (task.id === taskId) return;
      return task;
    });

    let userDeleteDecision = confirm(
      "Você realmente deseja deletar essa task?"
    );
    if (userDeleteDecision) setTasksList(tasksListWithDeletedOne);

    return;
  }

  return (
    <div className="app">
      <Header />

      <main>
        <form onSubmit={handleNewTask} className={styles.form}>
          <input
            type="text"
            name="todoTask"
            placeholder="Adicione uma nova task"
            onChange={handleInputChange}
            value={taskText}
          />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <TasksPanel
          tasksList={tasksList}
          onDoneTask={onDoneTask}
          onDeleteTask={onDeleteTask}
        />
      </main>
    </div>
  );
}
