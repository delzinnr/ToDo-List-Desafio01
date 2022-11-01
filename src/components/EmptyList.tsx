import styles from "./EmptyList.module.css";
import clipboard from "../assets/clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.content}>
      <img src={clipboard} alt="Imagem de um bloco de tarefas" />
      <p className={styles.text}>
        <span>Você ainda não tem tarefas cadastradas</span> <br /> Crie tarefas
        e organize seus itens a fazer
      </p>
    </div>
  );
}
