import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionCreateInput = {
  content?: string | null;
  correctAnswer?: "Option1" | null;
  options?: Array<"Option1">;
  quiz?: QuizWhereUniqueInput | null;
};
