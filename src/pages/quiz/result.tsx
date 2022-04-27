import { useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { useResultContext } from "../../hooks/ResultContext";
import { useRouter } from "next/router";
import Result from "../../entities/Result";

const QuizPage: NextPage = () => {
  const router = useRouter();
  const [result] = useResultContext() || [{} as Result];

  const { questions, answers } = result;

  if (!questions || !answers) {
    return <></>
  }

  const isTheAnswersCorrect = answers
  .map((answer, index) => (answer ? 'True' : 'False') === questions[index].correct_answer);
  const correctAnswersLength = isTheAnswersCorrect.filter(answer => answer).length;

  return (
    <div>
      <p>{correctAnswersLength}/{answers.length}</p>
      {questions.map((question, index) => (
        <div key={question.question}>
          <p>{question.category}: {question.question} - {answers[index] ? 'True' : 'False'}</p>
        </div>
      ))}
      <Link href="/quiz">
        <a>Play again</a>
      </Link>
    </div>
  );
};

export default QuizPage;
