import axios from "axios";

import Question, { QuestionDifficulty, QuestionType } from "../../entities/Question";

const API_URL = process.env.API_URL || 'https://opentdb.com/api.php';

interface ApiResponse {
  response_code: number;
  results: Question[];
}

const DEFAULT_QUESTION_AMOUNT = 10;

class QuizApi {
  static async getQuestions() : Promise<Question[]> {    
    const axiosResponse = await axios.get<ApiResponse>(API_URL, {
      params: {
        amount: DEFAULT_QUESTION_AMOUNT,
        difficulty: QuestionDifficulty.hard,
        type: QuestionType.boolean,
      }
    });
    const responseData = axiosResponse.data;

    return responseData.results;
  }
}

export default QuizApi;