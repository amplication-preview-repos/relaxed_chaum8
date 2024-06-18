import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionUpdateInput = {
  content?: string | null;
  correctAnswer?: "Option1" | null;
  options?: Array<"Option1">;
  quiz?: QuizWhereUniqueInput | null;
};
