export type StepId = "brain" | "gut" | "emotional" | "slow";

export type Step = {
  id: StepId;
  title: string;
  subtitle: string;
  questions: string[];
};

export const STEPS: Step[] = [
  {
    id: "brain",
    title: "Sobre a sua saciedade",
    subtitle: "Hungry Brain",
    questions: [
      "Mesmo após comer, demoro para me sentir satisfeito(a).",
      "Eu poderia continuar comendo mesmo sem estar com fome física.",
      "Preciso de porções maiores para me sentir bem.",
      "Quando como algo gostoso, quero repetir rapidamente.",
      "É difícil parar no “já deu”.",
    ],
  },
  {
    id: "gut",
    title: "Sobre a sua saciez",
    subtitle: "Hungry Gut",
    questions: [
      "Sinto fome novamente pouco tempo após uma refeição.",
      "Minha fome parece bem física (estômago roncando/vazio).",
      "Se atraso uma refeição, fico mal rapidamente.",
      "Acordo com fome ou sinto fome muito cedo.",
      "Preciso beliscar entre refeições para ficar ok.",
    ],
  },
  {
    id: "emotional",
    title: "Emotional Hunger",
    subtitle: "Comer por emoções (ansiedade, estresse, tédio)",
    questions: [
      "Eu como quando estou ansioso(a) ou estressado(a).",
      "Uso comida como recompensa ou conforto.",
      "Eu como quando estou entediado(a).",
      "Depois de comer, às vezes sinto culpa/arrependimento.",
      "Em dias difíceis, minha alimentação piora bastante.",
    ],
  },
  {
    id: "slow",
    title: "Slow Burn",
    subtitle: "Baixa energia / dificuldade para perder peso / estagnação",
    questions: [
      "Tenho dificuldade de perder peso mesmo fazendo o “certo”.",
      "Minha energia costuma ser baixa ao longo do dia.",
      "Sinto que meu corpo “economiza” energia facilmente.",
      "Mudanças pequenas na dieta impactam muito meu peso.",
      "Tenho tendência a estagnar com facilidade.",
    ],
  },
];
