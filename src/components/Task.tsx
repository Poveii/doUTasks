import { Check, Trash } from "phosphor-react";

import styles from "./Task.module.scss";

interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
  onDoneTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Task({
  id,
  content,
  isDone,
  onDoneTask,
  onDeleteTask,
}: TaskProps) {
  function handleTaskDone() {
    onDoneTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <label className={styles.check}>
        <input
          type="checkbox"
          name="taskStatus"
          checked={isDone}
          onChange={handleTaskDone}
        />
        {isDone && <Check size={12} weight="bold" />}
      </label>

      {isDone ? <del>{content}</del> : <p>{content}</p>}
      <button type="button" title="Deletar Task" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
