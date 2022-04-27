import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Question from "../../entities/Question";
import QuizApi from "../../services/quizApi";
import { useResultContext } from "../../hooks/ResultContext";

const FIRST_QUESTION_INDEX = 0;

const QuizPage: NextPage = () => {
  const router = useRouter()
  const questionsRef = useRef<Question[]>([]);
  const questionsAnwsersRef = useRef<boolean[]>([]);

  const [, setResult] = useResultContext();
  
  const [actualQuestionIndex, setActualQuationsIndex] = useState<number>(FIRST_QUESTION_INDEX);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getQuestions = async () => {
      setIsLoading(true);
      const questionsFromApi = await QuizApi.getQuestions();
      questionsRef.current = questionsFromApi;
      questionsAnwsersRef.current = new Array(questionsFromApi.length);
      setIsLoading(false);
    };

    getQuestions();
  }, []);

  if (isLoading) {
    return <p>loading questions...</p>;
  }

  const nextQuestion = () =>  setActualQuationsIndex(actualQuestionIndex + 1);
  const goToResultPage = () =>{
    setResult({
      answers: questionsAnwsersRef.current,
      questions: questionsRef.current,
    });
    router.push("/quiz/result");
  }

  const nextQuestionOrResultPage = () => {
    const isLastQuestion = actualQuestionIndex === questionsRef.current.length - 1;

    if (isLastQuestion) {
      goToResultPage();
    } else {
      nextQuestion();
    }
  };

  const answerTrue = () => {
    questionsAnwsersRef.current[actualQuestionIndex] = true;
    nextQuestionOrResultPage();
  };

  const answerFalse = () => {
    questionsAnwsersRef.current[actualQuestionIndex] = false;
    nextQuestionOrResultPage();
  };

  const questions = questionsRef.current;
  const actualQuestion = questions[actualQuestionIndex];

  return (
    <div>
      <h2>{actualQuestion.category}</h2>
      <div>{actualQuestion.question}</div>
      <button onClick={answerFalse}>False</button>
      <button onClick={answerTrue}>True</button>
    </div>
  );
};

export default QuizPage;
