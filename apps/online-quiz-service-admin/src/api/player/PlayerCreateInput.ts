import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type PlayerCreateInput = {
  room?: RoomWhereUniqueInput | null;
  username?: string | null;
};
