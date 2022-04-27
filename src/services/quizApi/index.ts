import axios from "axios";

import Question from "../../entities/Question";

const API_URL = process.env.API_URL || '';

interface ApiResponse {
  response_code: number;
  results: Question[];
}

class QuizApi {
  static async getQuestions() : Promise<Question[]> {    
    const axiosResponse = await axios.get<ApiResponse>(API_URL);
    const responseData = axiosResponse.data;

    return responseData.results;
  }
}

export default QuizApi;