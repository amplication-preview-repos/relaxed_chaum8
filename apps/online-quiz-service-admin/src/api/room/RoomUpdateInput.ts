import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { PlayerUpdateManyWithoutRoomsInput } from "./PlayerUpdateManyWithoutRoomsInput";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type RoomUpdateInput = {
  admin?: AdminWhereUniqueInput | null;
  name?: string | null;
  players?: PlayerUpdateManyWithoutRoomsInput;
  quiz?: QuizWhereUniqueInput | null;
};
