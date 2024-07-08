// utils/svg-generator.ts
interface GitHubStats {
    followers: number;
    publicRepos: number;
    // Add other stats you want to include
  }
  
  interface StackOverflowStats {
    reputation: number;
    answers: number;
    questions: number;
    // Add other stats you want to include
  }
  
  export default function generateSVG(data: GitHubStats | StackOverflowStats): string {
    // Example SVG generation logic
    const { followers, publicRepos, reputation, answers, questions } = data as GitHubStats & StackOverflowStats;
  
    return `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white"/>
        <text x="10" y="20" font-family="Arial" font-size="14" fill="black">Followers: ${followers}</text>
        <text x="10" y="40" font-family="Arial" font-size="14" fill="black">Public Repos: ${publicRepos}</text>
        <text x="10" y="60" font-family="Arial" font-size="14" fill="black">Reputation: ${reputation}</text>
        <text x="10" y="80" font-family="Arial" font-size="14" fill="black">Answers: ${answers}</text>
        <text x="10" y="100" font-family="Arial" font-size="14" fill="black">Questions: ${questions}</text>
      </svg>
    `;
  }
  