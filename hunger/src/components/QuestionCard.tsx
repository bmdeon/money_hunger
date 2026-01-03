import "../styles/question.css";

type Props = {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
};

export function QuestionCard({ text, value, onChange }: Props) {
  return (
    <div className="q-card">
      <div className="q-text">{text}</div>
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
        {/* <span>Indiferente</span> */}
        <span>Discordo Totalemnte</span>
      </div>


      {/* <div className="q-hint">
        1 = discordo totalmente • 3 = neutro • 5 = concordo totalmente
      </div> */}
    </div>
  );
}
