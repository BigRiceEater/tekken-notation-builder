import ErrorCommand from './error-command'

// https://github.com/facebook/create-react-app/issues/9831#issuecomment-716063951
/* 
  Failing to use craco to indicate these image files are not es Modules, the next best 
  workaround is by using the .default when declaring the require() for now.
  
  const image = require('../assets/one.svg).default

  but strangely when directly using in image src attriute, default is not needed.
*/

// 'icon' should be given the CommandName to find the corresponding filename to load
const Command = ({ icon, options = {} }) => {
  try {
    return (
      <img
        style={{ width: options.biggerCommands ? 64 : 32 }}
        src={require(`../assets/${icon}.svg`)}
      />
    );
  } catch (err) {
    return (<ErrorCommand options={options}/>)
  }
};

export default Command;

// map the command names to their filename counterpart so we don't have to write a very long switch case.
export const CommandName = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",

  onetwo: "1+2",
  onethree: "1+3",
  onefour: "1+4",

  twothree: "2+3",
  twofour: "2+4",

  threefour: "3+4",

  onetwothree: "1+2+3",
  onetwothreefour: "1+2+3+4",
  onethreefour: "1+3+4",

  forward: "f",
  fowardhold: "fp",
  back: "b",
  backhold: "bp",
  up: "u",
  uphold: "up",
  down: "d",
  downhold: "dp",

  downforward: "df",
  downfowardhold: "dfp",
  downback: "db",
  downbackhold: "dbp",
  upforward: "uf",
  upforwardhold: "ufp",
  upback: "ub",
  upbackhold: "ubp",

  dash: "dash",
  whilestanding: "ws",
  sidestepleft: "ssl",
  sidestepright: "ssr",
  launch: "launch",
  run: "run",
  screw: "screw",
  delay: "delay",
  wall: "wall",
  fullcrouch: "fc",
};
