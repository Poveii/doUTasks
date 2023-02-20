import { TasksList } from "../App";
import { Task } from "./Task";

import { ClipboardText } from "phosphor-react";
import styles from "./TasksPanel.module.scss";

interface TasksProps {
  tasksList: TasksList[];
  onDoneTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function TasksPanel({
  tasksList,
  onDoneTask,
  onDeleteTask,
}: TasksProps) {
  return (
    <div className={styles.tasks}>
      <div className={styles.tasksHeader}>
        <p>
          Tarefas Criadas
          <span>{tasksList.length}</span>
        </p>
        <p>
          Concluídas
          <span>
            {tasksList.filter(({ isDone }) => isDone !== false).length}
            {tasksList.length !== 0 && ` de ${tasksList.length}`}
          </span>
        </p>
      </div>

      <div className={styles.tasksContent}>
        <div className={styles.tasksList}>
          {tasksList.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isDone={task.isDone}
                onDoneTask={onDoneTask}
                onDeleteTask={onDeleteTask}
              />
            );
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
