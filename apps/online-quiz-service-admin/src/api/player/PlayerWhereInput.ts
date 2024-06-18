import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  username?: StringNullableFilter;
};
