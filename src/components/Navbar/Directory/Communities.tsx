import { communityState } from "@/src/atoms/communitiesAtom";
import useCommunityData from "@/src/hooks/useCommunityData";
import { LigText, NorText } from "@/src/styles/GlobalStyles";
import { DirectoryBox } from "@/src/styles/Navbar.styled";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from "@reach/menu-button";
import React, { useState } from "react";
import { FaReddit } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";

import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";
import MenuListItem from "./MenuListItem";

type CommunitiesProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Communities: React.FC<CommunitiesProps> = ({ open, setOpen }) => {
  const { mySnippets } = useRecoilValue(communityState);
  const { communityStateValue } = useCommunityData();
  const theme = useTheme();
  return (
    <>
      <DirectoryBox>
        <LigText>Moderating</LigText>
      </DirectoryBox>
      {communityStateValue.mySnippets
        .filter((snippet) => snippet.isModerator)
        .map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            Icon={FaReddit}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            imageURL={snippet.imageURL}
          />
        ))}
      <DirectoryBox>
        <LigText>My Communities</LigText>
      </DirectoryBox>
      <MenuItem
        onSelect={() => {}}
        className="menu_item"
        onClick={() => {
          setOpen(true);
        }}
      >
        <VscAdd />
        <NorText>Create Community</NorText>
      </MenuItem>
      {communityStateValue.mySnippets.map((snippet) => (
        <MenuListItem
          key={snippet.communityId}
          Icon={FaReddit}
          displayText={`r/${snippet.communityId}`}
          link={`/r/${snippet.communityId}`}
          imageURL={snippet.imageURL}
        />
      ))}
    </>
  );
};
export default Communities;
