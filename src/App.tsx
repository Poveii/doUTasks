import { Header } from "./components/Header";

import { Tasks } from "./components/Tasks";
import styles from "./App.module.scss";
import { PlusCircle } from "phosphor-react";

export function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <form className={styles.form}>
          <input
            type="text"
            name="todoTask"
            placeholder="Adicione uma nova task"
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
