import { Flag, Result } from 'meow';

export type Flags = {
  preferences: Flag<'boolean', boolean>;
  yo: Flag<'boolean', boolean>;
};

export type CommandParams = Pick<Result<Flags>, 'input' | 'pkg' | 'flags'>;

export interface SubCommand {
  (result: CommandParams): Promise<void> | void;
}
