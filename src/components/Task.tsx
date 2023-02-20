import { useState } from "react";
import { Check, Trash } from "phosphor-react";

import styles from "./Task.module.scss";

interface TaskProps {
  id: string;
  content: string;
  onDoneTask: (taskId: string) => void;
}

export function Task({ id, content, onDoneTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleTaskDone() {
    setIsChecked((state) => !state);
    onDoneTask(id);
  }

  return (
    <div className={styles.task}>
      <label className={styles.check}>
        <input
          type="checkbox"
          name="taskStatus"
          checked={isChecked}
          onChange={handleTaskDone}
        />
        {isChecked && <Check size={12} weight="bold" />}
      </label>

      {isChecked ? <del>{content}</del> : <p>{content}</p>}
      <button type="button" title="Deletar Task">
        <Trash size={20} />
      </button>
    </div>
  );
}
