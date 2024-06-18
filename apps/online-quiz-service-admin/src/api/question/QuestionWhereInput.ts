import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionWhereInput = {
  content?: StringNullableFilter;
  correctAnswer?: "Option1";
  id?: StringFilter;
  quiz?: QuizWhereUniqueInput;
};
