import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Stopwatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.tempo) {
      setTime(timeToSeconds(selected.tempo));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar</Button>
    </div>
  );
}
