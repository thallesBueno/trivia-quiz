enum Question_Difficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: Question_Difficulty;
  correct_answer: string;
  incorrect_answers: string[];
}

export default Question;