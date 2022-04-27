import type { NextPage } from "next";
import { useRouter } from 'next/router';

import Button from '../components/button';
import { Container } from '../styles/pages/homepage';

const Home: NextPage = () => {
  const router = useRouter();

  const goToQuiz = () => router.push("/quiz");
  return (
    <Container>
      <h1>Welcome to the Trivia Challange!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <h2>Can you score 100%?</h2>
      <Button onClick={goToQuiz}>Start</Button>
    </Container>
  );
};

export default Home;
