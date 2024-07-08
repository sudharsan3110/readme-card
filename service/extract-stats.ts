// services/extract-stats.ts
import { JSDOM } from 'jsdom';

interface StackOverflowStats {
  reputation: number;
  answers: number;
  questions: number;
  // Add other stats you want to include
}

const extractStats = (html: string): StackOverflowStats => {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Example extraction logic
  const reputationElement = document.querySelector('.fs-title');
  const answersElement = document.querySelector('[title="Answers"] .fs-body3');
  const questionsElement = document.querySelector('[title="Questions"] .fs-body3');

  const reputation = reputationElement ? parseInt(reputationElement.textContent || '0', 10) : 0;
  const answers = answersElement ? parseInt(answersElement.textContent || '0', 10) : 0;
  const questions = questionsElement ? parseInt(questionsElement.textContent || '0', 10) : 0;

  return {
    reputation,
    answers,
    questions,
    // Add other stats you want to include
  };
};

export default extractStats;
