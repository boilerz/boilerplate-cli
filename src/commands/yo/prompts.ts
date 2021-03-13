import { QuestionCollection } from 'inquirer';

export interface YoAnswers {
  name: string;
}

export const questions: QuestionCollection<YoAnswers> = [
  {
    name: 'name',
    message: 'Choose name',
    type: 'input',
  },
];

export const initialAnswers: Partial<YoAnswers> = {};
