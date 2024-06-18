import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  content?: SortOrder;
  correctAnswer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  options?: SortOrder;
  quizId?: SortOrder;
  updatedAt?: SortOrder;
};
