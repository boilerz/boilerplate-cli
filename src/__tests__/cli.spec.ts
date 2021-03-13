import meow from 'meow';
import updateNotifier from 'update-notifier';

import pkg from '../../package.json';
import '../cli';

describe('cli', () => {
  it('should setup cli', () => {
    expect((meow as jest.Mock).mock.calls).toMatchSnapshot();
  });

  it('should call the update notifier', () => {
    expect(updateNotifier).toHaveBeenCalled();
    expect(updateNotifier({ pkg }).notify).toHaveBeenCalled();
  });
});
