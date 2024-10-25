import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Header } from "./components/Header";
import { TasksPanel } from "./components/TasksPanel";
import { useLocalStorage } from "./components/useLocalStorage";

import { PlusCircle } from "phosphor-react";
import styles from "./App.module.scss";

export interface TasksList {
  id: string;
  content: string;
  isDone: boolean;
}

const initialTasksList: TasksList[] = [];

export function App() {
  const [tasksList, setTasksList] = useLocalStorage(initialTasksList);
  const [taskText, setTaskText] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskText(event.target.value);
  }

  function handleInputInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
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

  function handleMarkAll() {
    const allTasksDone = tasksList.map((task) => {
      return {
        ...task,
        isDone: true
      }
    })
    setTasksList(allTasksDone)
  }

  function handleCleanAll() {
    const allTasksClean = tasksList.map((task) => {
      return {
        ...task,
        isDone: false
      }
    })
    setTasksList(allTasksClean)
  }

  const isAllTasksCompleted = tasksList.every((task) => task.isDone === true)

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
            onInvalid={handleInputInvalid}
            value={taskText}
            required
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

        {
          tasksList.length >= 2 && <div className={styles.changeAllTasks}>
            {
              isAllTasksCompleted
              ?
                <button id="clean_all" onClick={handleCleanAll}>
                  Desmarcar todas as concluídas
                </button>
              :
                <button id="mark_all" onClick={handleMarkAll}>
                  Marcar todas como concluídas
                </button>
            }
          </div>
        }
      </main>
    </div>
  );
}
