import { Header } from "./components/Header";

import styles from "./App.module.scss";

export function App() {
  return (
    <div className="app">
      <Header />

      <form className={styles.form}>
        <input
          type="text"
          name="todoTask"
          placeholder="Adicione uma nova task"
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
