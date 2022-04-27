enum QuestionDifficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

enum QuestionType {
  boolean = "boolean",
  multiple = "multiple",
}

interface Question {
  category: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export {
  QuestionDifficulty,
  QuestionType
}

export default Question;