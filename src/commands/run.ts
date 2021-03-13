import { Result } from 'meow';
import updateNotifier, { Package } from 'update-notifier';

import preferences from './preferences';
import { Flags, SubCommand } from './typings';
import yo from './yo';

const subCommands: Record<keyof Flags, SubCommand> = {
  preferences,
  yo,
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
