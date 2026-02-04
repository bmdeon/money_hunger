import "../styles/question.css";

type Props = {
  index: number;
  text: string;
  value: number;
  onChange: (newValue: number) => void;
};

export function QuestionCard({ index, text, value, onChange }: Props) {
  return (
    <div className="q-card">
      <div className="q-row">
        <div className="q-index">{index}.</div>
        <div className="q-text">{text}</div>
      </div>
      <div className="q-scale">
        <input
          className="q-range"
          type="range"
          min={1}
          max={5}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
      <div className="q-label">
        <span>Concordo Totalemnte</span>
        <span>Discordo Totalemnte</span>
      </div>
    </div>
  );
}
