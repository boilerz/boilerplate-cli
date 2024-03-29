#!/usr/bin/env node

import readPkgUp from 'read-pkg-up';
import updateNotifier from 'update-notifier';
import { Argv } from 'yargs';
// @ts-ignore not typed yet
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

import preferencesCommand from './commands/preferences';
import yoCommand, { YoArguments } from './commands/yo';

export default function run(args: string[]): void {
  updateNotifier({ pkg: readPkgUp.sync()?.packageJson }).notify();
  const argv = yargs(args);

  argv.scriptName('my-command');
  argv.command(preferencesCommand);
  (argv as Argv<YoArguments>).command(yoCommand);

  argv.demandCommand().detectLocale(false).help().parse();
}

/* istanbul ignore if */
if (require.main === module) run(hideBin(process.argv));
