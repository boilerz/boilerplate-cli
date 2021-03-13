import chalk from 'chalk';
import execa from 'execa';
import inquirer from 'inquirer';
import ora from 'ora';

import { CommandParams } from '../typings';
import { initialAnswers, questions, YoAnswers } from './prompts';

export default async function yo({ pkg }: CommandParams): Promise<void> {
  const answers: YoAnswers = await inquirer.prompt(questions, initialAnswers);
  console.log(chalk.blue('Version'), chalk.bgYellow(pkg.version));

  const spinner = ora('Yo').start();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { stdout } = await execa('echo', [answers.name]);

  spinner.succeed(`🤘 ${chalk.red(stdout)}`);
}
