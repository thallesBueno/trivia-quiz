import styled from 'styled-components';
import Question from '../../entities/Question';

const Card = styled.div`
  padding: 24px 16px;
  max-width: 800px ;
  
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);

  h3 {
    color: ${({ theme }) => theme.colors.mainColor};
    margin-bottom: 8px ;
  }
`;

interface props {
  question: Question
}

const QuestionCard: React.FC<props> = ({ question }) =>  (
  <Card>
    <h3>{question.category}</h3>
    <h2>{question.question}</h2>
  </Card>
);

export default QuestionCard;
