import Link from 'next/link';
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to the Trivia Challange!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <Link href="/quiz">
        <a>Begin quiz</a>
      </Link>
    </div>
  );
};

export default Home;
