import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { QuestionUpdateManyWithoutQuizzesInput } from "./QuestionUpdateManyWithoutQuizzesInput";
import { RoomUpdateManyWithoutQuizzesInput } from "./RoomUpdateManyWithoutQuizzesInput";

export type QuizUpdateInput = {
  admin?: AdminWhereUniqueInput | null;
  description?: string | null;
  questions?: QuestionUpdateManyWithoutQuizzesInput;
  rooms?: RoomUpdateManyWithoutQuizzesInput;
  title?: string | null;
};
