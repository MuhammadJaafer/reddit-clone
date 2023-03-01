import { NorText } from "@/src/styles/GlobalStyles";
import { TabC } from "@/src/styles/Posts.styled";
import React from "react";
import { TabItemType } from "./NewPostForm";

type TabItemProps = {
  item: TabItemType;
  selected: boolean;
  setSelected: any;
};

const TabItem: React.FC<TabItemProps> = ({ item, selected, setSelected }) => {
  return (
    <TabC
      selected={selected}
      onClick={() => {
        setSelected(item.title);
      }}
    >
      <item.icon />
      <NorText>{item.title}</NorText>
    </TabC>
  );
};
export default TabItem;
