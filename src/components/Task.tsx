import { useState } from "react";
import { Check, Trash } from "phosphor-react";

import styles from "./Task.module.scss";

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleTaskDone() {
    setIsChecked((state) => !state);
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
        {isChecked && <Check size={18} />}
      </label>

      <p>Task</p>
      <button type="button" title="Deletar Task">
        <Trash size={20} />
      </button>
    </div>
  );
}
