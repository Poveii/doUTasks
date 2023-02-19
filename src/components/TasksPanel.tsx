import { ClipboardText } from "phosphor-react";
import { TasksList } from "../App";
import { Task } from "./Task";
import styles from "./TasksPanel.module.scss";

interface TasksProps {
  tasksList: TasksList[];
}

export function TasksPanel({ tasksList }: TasksProps) {
  return (
    <div className={styles.tasks}>
      <div className={styles.tasksHeader}>
        <p>
          Tarefas Criadas
          <span>0</span>
        </p>
        <p>
          Concluídas
          <span>0</span>
        </p>
      </div>

      <div className={styles.tasksContent}>
        <div className={styles.tasksList}>
          {tasksList.map((task) => {
            return <Task key={task.id} />;
          })}
        </div>

        {tasksList.length === 0 && (
          <div className={styles.defaultMessage}>
            <ClipboardText size={84} />
            <p>
              <strong>Você ainda não tem tasks cadastradas</strong>
              Crie tasks e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
