import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

//images
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContent";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "imagem de uma nuvem de pensamento",
    },
  },
};

//transformando o feedback em type para usar nas tipagens
//keyof = retorna as chaves do objeto
export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);

  //estado pra success do feedback
  const [feedbackSent, setFeedbackSent] = useState(false);

  //funcao de voltar feedback
  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedBackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      

      {//se ja tiver enviado um feedback entao mostra a tela de success
      feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
      ) : (
        <>
          {!feedBackType ? (
            //enviando a funcao setFeedBackType como prop
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedBackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
