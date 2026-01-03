import { useMemo } from "react";
import type { Step } from "../data/questions";
import { QuestionCard } from "./QuestionCard";
import { ProgressBar } from "./ProgressBar";
import "../styles/app.css";

const MAX_QUESTION_SCORE = 5;

type Props = {
  step: Step;
  stepIndex: number;
  totalSteps: number;
  answers: number[];
  onAnswersChange: (newAnswers: number[]) => void;
  onNext: () => void;
  onBack: () => void;
  canBack: boolean;
  isLast: boolean;
};

export function StepScreen({
  step,
  stepIndex,
  totalSteps,
  answers,
  onAnswersChange,
  onNext,
  onBack,
  canBack,
  isLast,
}: Props) {
  const total = useMemo(() => {
    return answers.reduce((acc, value) => acc + value, 0);
  }, [answers]);

  function setAnswer(questionIndex: number, newValue: number) {
    const updatedAnswers = answers.map((currentValue, index) =>
      index === questionIndex ? newValue : currentValue
    );
    onAnswersChange(updatedAnswers);
  }

  return (
    <div className="page">
      <div className="shell">
        {/* HEADER DA MARCA */}
        <header className="brandHeader">
          <div className="brandLeft">
            <div className="logoBox" aria-label="Logo">
              LO<br />GO
            </div>

            <div className="brandText">
              <div className="brandTitle">Minha Marca</div>
              <div className="brandSlogan">Bem estar para todos</div>
            </div>
          </div>
        </header>

        {/* PROGRESSO FORA DO QUESTIONÁRIO */}
        <ProgressBar current={stepIndex} total={totalSteps} />

        {/* CARD DO QUESTIONÁRIO */}
        <div className="card">
          <header className="header">
            <h1>{step.title}</h1>
            <p className="muted">{step.subtitle}</p>
          </header>

          <div className="questions">
            {step.questions.map((q, i) => (
              <QuestionCard
                key={i}
                text={q}
                value={answers[i]}
                onChange={(v) => setAnswer(i, v)}
              />
            ))}
          </div>

          <div className="footer">
            <div className="score">
              Total: <strong>{total}</strong> / {step.questions.length * MAX_QUESTION_SCORE}
            </div>

            <div className="buttonGroup">
              <button className="button" onClick={onBack} disabled={!canBack}>
                Voltar
              </button>
              <button className="button" onClick={onNext}>
                {isLast ? "Finalizar" : "Próximo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}