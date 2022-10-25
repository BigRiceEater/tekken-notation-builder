import { Button } from "antd";
import { nanoid } from "nanoid";
import { CommandName } from "../../util/command-name";
import Command from "../command";

export const BuilderPallete = ({ onClick }) => {
  const commands = () => {
    return Object.values(CommandName).map((icon) => ({
      id: nanoid(),
      icon: icon,
      content: <Command icon={icon} />,
    }));
  };

  return (
    <>
      {commands().map((item) => {
        const { id, icon, content } = item;
        return (
          <Button key={id} onClick={()=> onClick(item)}>
            {content}
          </Button>
        );
      })}
    </>
  );
};
