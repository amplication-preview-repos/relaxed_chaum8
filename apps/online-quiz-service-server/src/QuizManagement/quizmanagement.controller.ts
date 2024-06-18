import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { QuizManagementService } from "./quizmanagement.service";

@swagger.ApiTags("quizManagements")
@common.Controller("quizManagements")
export class QuizManagementController {
  constructor(protected readonly service: QuizManagementService) {}

  @common.Post("/answer-submission")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnswerSubmission(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AnswerSubmission(body);
      }

  @common.Post("/begin-quiz")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BeginQuiz(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.BeginQuiz(body);
      }

  @common.Get("/:id/start-quiz")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartQuiz(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.StartQuiz(body);
      }

  @common.Get("/:id/submit-answer")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitAnswer(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SubmitAnswer(body);
      }
}
