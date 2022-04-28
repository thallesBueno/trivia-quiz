import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Question from "../../entities/Question";
import QuizApi from "../../services/quizApi";
import { useResultContext } from "../../hooks/ResultContext";

import Button, { ButtonVariant } from "../../components/button";
import QuestionCard from "../../components/questionCard";

import { ButtonsContainer, Container } from "../../styles/pages/quiz";

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
    <Container>
      <h4>Question {actualQuestionIndex + 1}/{questions.length}</h4>
      <QuestionCard question={actualQuestion}/>
      <ButtonsContainer>
        <Button onClick={answerFalse} variant={ButtonVariant.error}>False</Button>
        <Button onClick={answerTrue} variant={ButtonVariant.success}>True</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default QuizPage;
