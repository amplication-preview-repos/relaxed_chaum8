import { Room } from "../room/Room";

export type Player = {
  createdAt: Date;
  id: string;
  room?: Room | null;
  updatedAt: Date;
  username: string | null;
};
