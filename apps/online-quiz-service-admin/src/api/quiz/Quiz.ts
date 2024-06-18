import { Admin } from "../admin/Admin";
import { Question } from "../question/Question";
import { Room } from "../room/Room";

export type Quiz = {
  admin?: Admin | null;
  createdAt: Date;
  description: string | null;
  id: string;
  questions?: Array<Question>;
  rooms?: Array<Room>;
  title: string | null;
  updatedAt: Date;
};
