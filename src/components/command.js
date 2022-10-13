import { icons } from "antd/lib/image/PreviewGroup";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";

const Command = ({children, options = {}})=>{

  var iconSource = require('../assets/1.svg');
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