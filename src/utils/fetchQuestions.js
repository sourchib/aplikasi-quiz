// utils/fetchQuestions.js
import axios from 'axios';

const fetchQuestions = async () => {
  try {
    const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
    return response.data.results;
  } catch (error) {
    console.error("Error fetching the quiz questions:", error);
    return [];
  }
};

export default fetchQuestions;
