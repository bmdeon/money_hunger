import "../styles/progress.css";

type Props = {
  current: number; // índice do step (0,1,2,3)
  total: number;   // total de steps (4)
};

export function ProgressBar({ current, total }: Props) {
  const percent = Math.round(((current + 1) / total) * 100);

  return (
    <div className="progress">
      <div className="progress-top">
        <span>Etapa {current + 1} de {total}</span>
        <span>{percent}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
