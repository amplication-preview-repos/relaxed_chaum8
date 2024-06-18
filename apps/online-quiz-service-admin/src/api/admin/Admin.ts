import { Quiz } from "../quiz/Quiz";
import { Room } from "../room/Room";

export type Admin = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  quizzes?: Array<Quiz>;
  rooms?: Array<Room>;
  updatedAt: Date;
};
