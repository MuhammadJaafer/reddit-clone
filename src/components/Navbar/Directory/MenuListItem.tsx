import useDirectory from "@/src/hooks/useDirectory";
import { NorText } from "@/src/styles/GlobalStyles";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from "@reach/menu-button";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type MenuListItemProps = {
  displayText: string;
  link: string;
  Icon: IconType;
  imageURL?: string;
};

const MenuListItem: React.FC<MenuListItemProps> = ({
  displayText,
  link,
  Icon,
  imageURL,
}) => {
  const { onSelectMenuItem } = useDirectory();
  return (
    <MenuItem
      className="menu_item2"
      onClick={() => {
        onSelectMenuItem({ link, displayText, imageURL, Icon });
      }}
    >
      {imageURL ? <img src={imageURL}></img> : <Icon />}
      <NorText>{displayText}</NorText>
    </MenuItem>
  );
};
export default MenuListItem;
