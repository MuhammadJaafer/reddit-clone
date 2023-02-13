import { FlexRow } from "@/src/styles/GlobalStyles";
import { Box, IconsBox, IconsC } from "@/src/styles/Navbar.styled";
import React from "react";

import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { VscAdd } from "react-icons/vsc";
type IconsProps = {};

const Icons: React.FC<IconsProps> = () => {
  return (
    <IconsC>
      <Box>
        <IconsBox>
          <BsArrowUpRightCircle />
        </IconsBox>
        <IconsBox>
          <IoFilterCircleOutline />
        </IconsBox>
        <IconsBox>
          <IoVideocamOutline />
        </IconsBox>
      </Box>
      <IconsBox>
        <BsChatDots />
      </IconsBox>
      <IconsBox>
        <IoNotificationsOutline />
      </IconsBox>
      <IconsBox>
        <VscAdd />
      </IconsBox>
    </IconsC>
  );
};
export default Icons;
