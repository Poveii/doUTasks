import { Header } from "./components/Header";

export function App() {
  return (
    <div className="app">
      <Header />

      <form>
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
