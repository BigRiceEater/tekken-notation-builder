const { default: Command } = require('../components/command');
const { CommandName } = require('./command-name')

exports.sanitize = function(cmdstring){
  // remove all spaces
  const dataNoSpaces = cmdstring.replace(/\s/g, "");
  // artificially add the limit symbol for pseudo command so we can split properly without user writing this themselves
  const addLimiterForAngleSymbol = dataNoSpaces.replace(/>/g, ",>,");
  // split into array by . and + and , because '>' is actually a pseudo command we can't split by this symbol
  const splitCommands = addLimiterForAngleSymbol.split(/[\.,\+]+/);
  // remove all empty elements
  const sanitizedCommands = splitCommands.filter((c) => c);

  const numCmds = sanitizedCommands.length;
  for(let i = 0; i < numCmds; i++){ 
    let cmd = sanitizedCommands[i];
    try {
      ['F','D','B','U'].forEach(notation => {
        if (cmd.includes(notation)){
          sanitizedCommands[i] = cmd + 'p';
          throw new Error('Not an Error');
        }
      })
    }
    catch(err){} // do nothing, just used to break forEach.
  }

  const lowercaseCommands = sanitizedCommands.map( cmds => cmds.toLowerCase())

  return lowercaseCommands;
}

exports.isValid = function(cmds){
  const errors = [];
  const filenames = Object.values(CommandName);

  // ideally we should be checking against CommandName properties not the values directly
  cmds.forEach((cmd,index) => {
    if (!filenames.includes(cmd)){
      errors.push({cmd, index})
    }
  })

  return errors;
}