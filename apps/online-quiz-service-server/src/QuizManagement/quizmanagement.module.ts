import { Module } from "@nestjs/common";
import { QuizManagementService } from "./quizmanagement.service";
import { QuizManagementController } from "./quizmanagement.controller";
import { QuizManagementResolver } from "./quizmanagement.resolver";

@Module({
  controllers: [QuizManagementController],
  providers: [QuizManagementService, QuizManagementResolver],
  exports: [QuizManagementService],
})
export class QuizManagementModule {}
