import { Result } from 'meow';
import { Package } from 'update-notifier';

import preferences from '../../commands/preferences';
import run, { Flags } from '../../commands/run';

jest.mock('../../commands/preferences', () => ({
  __esModule: true,
  default: jest.fn(),
}));

function mockCli({ flags }: Partial<Result<Flags>> = {}): Result<Flags> {
  return ({
    flags: {
      ...flags,
    },
    pkg: {} as Package,
    input: [],
    showHelp: jest.fn(),
  } as unknown) as Result<Flags>;
}

describe('commands/run', () => {
  it('should run help when no sub command is selected', async () => {
    const cli = mockCli();
    await run(cli);

    expect(cli.showHelp).toHaveBeenCalled();
  });

  it('should run preferences sub command', async () => {
    const cli = mockCli({ flags: { preferences: true } });
    await run(cli);

    expect(preferences).toHaveBeenCalled();
  });
});
