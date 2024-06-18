import { QuizUpdateManyWithoutAdminsInput } from "./QuizUpdateManyWithoutAdminsInput";
import { RoomUpdateManyWithoutAdminsInput } from "./RoomUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  quizzes?: QuizUpdateManyWithoutAdminsInput;
  rooms?: RoomUpdateManyWithoutAdminsInput;
};
