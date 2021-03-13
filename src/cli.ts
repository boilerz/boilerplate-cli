#!/usr/bin/env node
import chalk from 'chalk';
import meow from 'meow';

import run from './commands/run';
import { Flags } from './commands/typings';

const flags: Flags = {
  preferences: { type: 'boolean', alias: 'p' },
  yo: { type: 'boolean', alias: 'y' },
};

const cli = meow(
  `
  Usage
    $ boilerplate
  Options
    --preferences, -p  Setup preferences.
  Examples
    $ boilerplate -p
`,
  {
    flags,
  },
);

run(cli).catch((err: Error) => {
  console.log(chalk.bold.red(err.name), chalk.underline.red(err.message));
  console.log(chalk.gray(err.stack));
  process.exit(1);
});
