import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  adminId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
