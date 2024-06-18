import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type PlayerUpdateInput = {
  room?: RoomWhereUniqueInput | null;
  username?: string | null;
};
