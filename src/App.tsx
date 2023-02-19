import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Header } from "./components/Header";
import { TasksPanel } from "./components/TasksPanel";

import { PlusCircle } from "phosphor-react";
import styles from "./App.module.scss";

export function App() {
  const [tasksList, setTasksList] = useState([
    {
      id: uuidV4(),
      content: "Implementar todas as funcionalidades",
      isDone: false,
    },
    {
      id: uuidV4(),
      content: "Terminar esse projeto hoje",
      isDone: false,
    },
  ]);
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

        <TasksPanel tasksList={tasksList} />
      </main>
    </div>
  );
}
