import { ClipboardText } from "phosphor-react";
import styles from "./Tasks.module.scss";

export function Tasks() {
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

      <div className={styles.tasksList}>
        <div>
          <ClipboardText size={84} />
          <p>
            <strong>Você ainda não tem tasks cadastradas</strong>
            Crie tasks e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>
  );
}
