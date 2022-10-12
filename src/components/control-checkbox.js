import { Checkbox } from "antd";

const ControlCheckbox = ({ controlName, checked, children, onChange }) => {
  return (
    <Checkbox
      onChange={(event) => {
        onChange({
          controlName,
          value: event.target.checked,
        });
      }}
      checked={checked}>
      {children}
    </Checkbox>
  );
};

export default ControlCheckbox;
