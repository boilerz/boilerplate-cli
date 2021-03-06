import yargs, { Argv, CommandModule } from 'yargs';

export async function runCommand(
  command: CommandModule<any, any>,
  args: string,
): Promise<void> {
  await yargs.scriptName('test').command(command).parse(args);
}

export function displayOutput(
  command: CommandModule<any, any>,
  args: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      yargs
        .scriptName('test')
        .command(command)
        .exitProcess(false)
        .detectLocale(false)
        .parse(args, (err: Error, argv: Argv<{}>, output: string) => {
          resolve(output);
        });
    } catch (err) {
      reject(err);
    }
  });
}
