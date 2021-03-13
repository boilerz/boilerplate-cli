import { Flag, Result } from 'meow';
import updateNotifier, { Package } from 'update-notifier';

import preferences from './preferences';

export type Flags = {
  preferences: Flag<'boolean', boolean>;
};

export interface SubCommand {
  (
    result: Pick<Result<Flags>, 'input' | 'pkg' | 'flags'>,
  ): Promise<void> | void;
}

const subCommands: Record<keyof Flags, SubCommand> = {
  preferences,
};

export default async function run({
  pkg,
  input,
  flags,
  showHelp,
}: Result<Flags>): Promise<void> {
  updateNotifier({ pkg: pkg as Package }).notify();

  const commandKey = (Object.keys(flags) as (keyof Flags)[]).find(
    (flag) => flags[flag] && !!subCommands[flag],
  );
  if (!commandKey) return showHelp();

  return subCommands[commandKey]({ input, pkg, flags });
}
