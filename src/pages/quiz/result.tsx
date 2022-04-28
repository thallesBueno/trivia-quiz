import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { useResultContext } from "../../hooks/ResultContext";
import Result from "../../entities/Result";

import QuestionCard from "../../components/questionCard";
import Button from "../../components/button";

import { Container, QuestionsContainer } from "../../styles/pages/quizResult";

const QuizPage: NextPage = () => {
  const router = useRouter();
  const [result] = useResultContext() || [{} as Result];

  const { questions, answers } = result;

  if (!questions || !answers) {
    return (
      <Link href="/">
        <a>Back to home</a>
      </Link>
    );
  }

  const goToHomepage = () => router.push('/');

  const questionsCorrected = answers
    .map((answer, index) => (answer ? 'True' : 'False') === questions[index].correct_answer);
  const correctAnswersLength = questionsCorrected.filter(answer => answer).length;

  return (
    <Container>
      <h4>Score {correctAnswersLength}/{answers.length}</h4>
      <QuestionsContainer>
        {questions.map((question) => (
          <QuestionCard key={question.question} question={question} small/>
        ))}
      </QuestionsContainer>
      <Button onClick={goToHomepage}>Play again</Button>
    </Container>
  );
};

export default QuizPage;
