import { NorText } from "@/src/styles/GlobalStyles";
import { MenuItem } from "@chakra-ui/menu";
import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";

type CommunitiesProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Communities: React.FC<CommunitiesProps> = ({ open, setOpen }) => {
  return (
    <>
      <MenuItem
        className="menu_item"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div>
          <VscAdd />
          <NorText>Create Community</NorText>
        </div>
      </MenuItem>
    </>
  );
};
export default Communities;
