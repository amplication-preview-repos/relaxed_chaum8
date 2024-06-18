import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { QuestionCreateNestedManyWithoutQuizzesInput } from "./QuestionCreateNestedManyWithoutQuizzesInput";
import { RoomCreateNestedManyWithoutQuizzesInput } from "./RoomCreateNestedManyWithoutQuizzesInput";

export type QuizCreateInput = {
  admin?: AdminWhereUniqueInput | null;
  description?: string | null;
  questions?: QuestionCreateNestedManyWithoutQuizzesInput;
  rooms?: RoomCreateNestedManyWithoutQuizzesInput;
  title?: string | null;
};
