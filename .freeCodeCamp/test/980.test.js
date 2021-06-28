const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');
    const correctCommands = (lastCommand.includes('grep') && lastCommand.includes('wc') && lastCommand.includes('>>') && (lastCommand.includes('kitty_info.txt') || lastCommand.includes('./kitty_info.txt')));
    const correctFlags = (lastCommand.indexOf('-o') > 0 || lastCommand.indexOf('--only-matching') > 0);

    assert(correctCommands && correctFlags && /\s+7\s*$/.test(fileContents));
  });
});
