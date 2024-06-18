import { Quiz } from "../quiz/Quiz";

export type Question = {
  content: string | null;
  correctAnswer?: "Option1" | null;
  createdAt: Date;
  id: string;
  options?: Array<"Option1">;
  quiz?: Quiz | null;
  updatedAt: Date;
};
