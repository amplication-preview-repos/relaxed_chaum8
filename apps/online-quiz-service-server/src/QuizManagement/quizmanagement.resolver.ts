import * as graphql from "@nestjs/graphql";
import { SubmitAnswerInput } from "../quizManagement/SubmitAnswerInput";
import { StartQuizInput } from "../quizManagement/StartQuizInput";
import { QuizManagementService } from "./quizmanagement.service";

export class QuizManagementResolver {
  constructor(protected readonly service: QuizManagementService) {}

  @graphql.Mutation(() => String)
  async AnswerSubmission(
    @graphql.Args()
    args: SubmitAnswerInput
  ): Promise<string> {
    return this.service.AnswerSubmission(args);
  }

  @graphql.Mutation(() => String)
  async BeginQuiz(
    @graphql.Args()
    args: StartQuizInput
  ): Promise<string> {
    return this.service.BeginQuiz(args);
  }

  @graphql.Query(() => String)
  async StartQuiz(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.StartQuiz(args);
  }

  @graphql.Query(() => String)
  async SubmitAnswer(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubmitAnswer(args);
  }
}
