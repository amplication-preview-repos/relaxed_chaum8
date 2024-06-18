import { Admin } from "../admin/Admin";
import { Player } from "../player/Player";
import { Quiz } from "../quiz/Quiz";

export type Room = {
  admin?: Admin | null;
  createdAt: Date;
  id: string;
  name: string | null;
  players?: Array<Player>;
  quiz?: Quiz | null;
  updatedAt: Date;
};
