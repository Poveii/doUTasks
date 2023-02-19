import { ChangeEvent, useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { PlusCircle } from "phosphor-react";
import styles from "./App.module.scss";

export function App() {
  const [taskText, setTaskText] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  return (
    <div className="app">
      <Header />

      <main>
        <form className={styles.form}>
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

        <Tasks />
      </main>
    </div>
  );
}
