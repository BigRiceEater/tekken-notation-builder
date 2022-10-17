import { icons } from "antd/lib/image/PreviewGroup";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";

// https://github.com/facebook/create-react-app/issues/9831#issuecomment-716063951
/* 
  Failing to use craco to indicate these image files are not es Modules, the next best 
  workaround is by using the .default when declaring the require() for now.
*/

const Command = ({children, options = {}})=>{

  var iconSource = require('../assets/1.svg').default;
  switch(children){
    case IconName.one : 
      iconSource = one;
    break;
    case IconName.two :
      iconSource = two;
      break;
    case IconName.three:
      iconSource = three;
      break;
    case IconName.four:
      iconSource = four;
      break;
  }

  return(
    <img
    style={{ width: options.biggerCommands ? 64 : 32 }}
    src={iconSource}
    />
  )
}

export default Command;

export const IconName = {
  one : "one",
  two : "two",
  three : "three",
  four : "four",
}