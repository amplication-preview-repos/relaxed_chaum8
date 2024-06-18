import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type QuizWhereInput = {
  admin?: AdminWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  questions?: QuestionListRelationFilter;
  rooms?: RoomListRelationFilter;
  title?: StringNullableFilter;
};
