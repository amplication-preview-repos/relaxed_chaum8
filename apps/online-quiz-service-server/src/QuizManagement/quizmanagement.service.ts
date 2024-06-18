import { Injectable } from "@nestjs/common";
import { SubmitAnswerInput } from "../quizManagement/SubmitAnswerInput";
import { StartQuizInput } from "../quizManagement/StartQuizInput";

@Injectable()
export class QuizManagementService {
  constructor() {}
  async AnswerSubmission(args: SubmitAnswerInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async BeginQuiz(args: StartQuizInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async StartQuiz(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubmitAnswer(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
