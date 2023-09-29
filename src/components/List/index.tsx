import { ITask } from "../../types/task";
import style from "./List.module.scss";
import Item from "./item";

interface Props {
  task: ITask[];
  selectTask: (taskSelected: ITask) => void;
}

function List({ task, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {task.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
