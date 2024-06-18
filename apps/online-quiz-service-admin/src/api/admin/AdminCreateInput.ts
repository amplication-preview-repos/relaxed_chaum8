import { QuizCreateNestedManyWithoutAdminsInput } from "./QuizCreateNestedManyWithoutAdminsInput";
import { RoomCreateNestedManyWithoutAdminsInput } from "./RoomCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  quizzes?: QuizCreateNestedManyWithoutAdminsInput;
  rooms?: RoomCreateNestedManyWithoutAdminsInput;
};
