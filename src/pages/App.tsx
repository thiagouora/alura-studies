import React from "react";
import Forms from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import Stopwatch from "../components/Stopwatch";
import { useState } from "react";
import { ITask } from "../types/task";

function App() {
  const [task, setTask] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTask((previousTasks) =>
      previousTasks.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === taskSelected.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTask((previousTask) =>
        previousTask.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selecionado: false,
              completado: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTask={setTask} />
      <List task={task} selectTask={selectTask} />
      <Stopwatch selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
