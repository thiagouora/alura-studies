import style from "./Watch.module.scss";

interface Props {
  time: number | undefined;
}

export default function Watch({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesDozens, minutesUnits] = String(minutes).padStart(2, "0");
  const [secondsDozens, secondsUnits] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutesDozens}</span>
      <span className={style.relogioNumero}>{minutesUnits}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsDozens}</span>
      <span className={style.relogioNumero}>{secondsUnits}</span>
    </>
  );
}
