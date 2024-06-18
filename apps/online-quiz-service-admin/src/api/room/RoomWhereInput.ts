import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type RoomWhereInput = {
  admin?: AdminWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  players?: PlayerListRelationFilter;
  quiz?: QuizWhereUniqueInput;
};
