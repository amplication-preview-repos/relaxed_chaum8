import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "content";

export const QuestionTitle = (record: TQuestion): string => {
  return record.content?.toString() || String(record.id);
};
