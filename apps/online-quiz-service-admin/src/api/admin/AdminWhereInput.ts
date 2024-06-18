import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type AdminWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  quizzes?: QuizListRelationFilter;
  rooms?: RoomListRelationFilter;
};
