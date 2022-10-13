import one from "../assets/1.svg";

const Command = ({options = {}})=>{
  return(
    <img
    style={{ width: options.biggerCommands ? 64 : 32 }}
    src={one}
    />
  )
}

export default Command;