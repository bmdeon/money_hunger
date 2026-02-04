// import { useMemo, useState } from "react";
import { useState } from "react";
import type { StepId } from "../data/questions";
import { STEPS } from "../data/questions";
import { IntroScreen } from "./IntroScreen";
import { StepScreen } from "./StepScreen";
import { FinalScreen } from "./FinalScreen";

type AnswersByStep = Record<StepId, number[]>;

function makeInitialAnswers(): AnswersByStep {
  return {
    brain: Array(5).fill(3),
    gut: Array(5).fill(3),
    emotional: Array(5).fill(3),
    slow: Array(5).fill(3),
  };
}

export function MultiStepQuiz() {
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answersByStep, setAnswersByStep] = useState<AnswersByStep>(
    makeInitialAnswers()
  );

  const isFinished = stepIndex >= STEPS.length;
  const currentStep = STEPS[stepIndex];

  // const totals = useMemo(() => {
  //   const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
  //   return {
  //     brain: sum(answersByStep.brain),
  //     gut: sum(answersByStep.gut),
  //     emotional: sum(answersByStep.emotional),
  //     slow: sum(answersByStep.slow),
  //   };
  // }, [answersByStep]);

  function updateStepAnswers(stepId: StepId, newAnswers: number[]) {
    setAnswersByStep((prev) => ({ ...prev, [stepId]: newAnswers }));
  }

  function next() {
    setStepIndex((s) => Math.min(s + 1, STEPS.length));
  }

  function back() {
    setStepIndex((s) => Math.max(s - 1, 0));
  }

  // function reset() {
  //   setAnswersByStep(makeInitialAnswers());
  //   setStepIndex(0);
  //   setStarted(false);
  // }

  // ✅ TELA ANTES DO QUIZ
  if (!started) {
    return (
      <IntroScreen
        title="Descubra seu tipo de fome em 2 minutos"
        buttonText="Iniciar Quiz"
        youtubeId="HpC9yb3fEOo"
        onStart={() => setStarted(true)}
      />
    );
  }

  if (isFinished) {
    // if (totals.brain > 20) {

  // if (!started) {
    return <FinalScreen />;
    }

  return (
    <StepScreen
      step={currentStep}
      stepIndex={stepIndex}
      totalSteps={STEPS.length}
      answers={answersByStep[currentStep.id]}
      onAnswersChange={(newAnswers) => updateStepAnswers(currentStep.id, newAnswers)}
      onNext={next}
      onBack={back}
      canBack={stepIndex > 0}
      isLast={stepIndex === STEPS.length - 1}
    />
  );
}
