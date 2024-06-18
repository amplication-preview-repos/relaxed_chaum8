import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { QuizTitle } from "../quiz/QuizTitle";

export const QuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <SelectInput
          source="correctAnswer"
          label="correctAnswer"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectArrayInput
          label="options"
          source="options"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="quiz.id" reference="Quiz" label="Quiz">
          <SelectInput optionText={QuizTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
