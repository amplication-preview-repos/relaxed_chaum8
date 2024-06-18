import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { PlayerCreateNestedManyWithoutRoomsInput } from "./PlayerCreateNestedManyWithoutRoomsInput";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type RoomCreateInput = {
  admin?: AdminWhereUniqueInput | null;
  name?: string | null;
  players?: PlayerCreateNestedManyWithoutRoomsInput;
  quiz?: QuizWhereUniqueInput | null;
};
