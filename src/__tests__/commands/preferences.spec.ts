import inquirer from 'inquirer';
import { mocked } from 'ts-jest/utils';

import preferences from '../../commands/preferences';
import preferencesStore from '../../helper/preferencesStore';

const mockedInquirer = mocked(inquirer, true);

describe('commands/preferences', () => {
  it('should prompt and store preferences', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      foo: 'foo',
      bar: false,
      baz: 8,
    });
    await preferences();

    expect(inquirer.prompt).toMatchSnapshot();
    expect(preferencesStore.get('foo')).toEqual('foo');
    expect(preferencesStore.get('bar')).toBe(false);
    expect(preferencesStore.get('baz')).toEqual(8);
  });
});
