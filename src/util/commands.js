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