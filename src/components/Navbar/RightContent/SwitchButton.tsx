import React from "react";
import { SwitchButton as SwButton } from "@/src/styles/GlobalStyles";
type SwitchButtonProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: boolean;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({ handleChange, value }) => {
  return (
    <SwButton>
      <input type="checkbox" defaultChecked={value} onChange={handleChange} />
      <span className="slider round"></span>
    </SwButton>
  );
};
export default SwitchButton;
