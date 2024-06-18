import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUIZ_TITLE_FIELD } from "./QuizTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";

export const QuizShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Admin" source="admin.id" reference="Admin">
          <TextField source={ADMIN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Question"
          target="quizId"
          label="Questions"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <TextField label="correctAnswer" source="correctAnswer" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="options" source="options" />
            <ReferenceField label="Quiz" source="quiz.id" reference="Quiz">
              <TextField source={QUIZ_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Room" target="quizId" label="Rooms">
          <Datagrid rowClick="show">
            <ReferenceField label="Admin" source="admin.id" reference="Admin">
              <TextField source={ADMIN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField label="Quiz" source="quiz.id" reference="Quiz">
              <TextField source={QUIZ_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
