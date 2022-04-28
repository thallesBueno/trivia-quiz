import Question from '../../entities/Question';

import { Card } from './style';

interface props {
  question: Question,
  small?: boolean
}

const QuestionCard: React.FC<props> = ({ question, small = false }) =>  (
  <Card small={small}>
    <h3>{question.category}</h3>
    <h2>{question.question}</h2>
  </Card>
);

export default QuestionCard;
