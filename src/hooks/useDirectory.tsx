import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaReddit } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { communityState } from "../atoms/communitiesAtom";
import {
  defaultMenuItem,
  DirectoryMenuItem,
  DirectoryMenuState,
} from "../atoms/directoryMenuAtom";

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(DirectoryMenuState);
  const communityStateValue = useRecoilValue(communityState);
  const router = useRouter();

  const toggleMenuOpen = () => {
    setDirectoryState((prev) => ({
      ...prev,
      isOpen: !directoryState.isOpen,
    }));
  };

  const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
    setDirectoryState((prev) => ({ ...prev, selectedMenuItem: menuItem }));
    router.push(menuItem.link);
  };

  useEffect(() => {
    const { currentCommunity } = communityStateValue;
    if (currentCommunity)
      setDirectoryState((prev) => ({
        ...prev,
        selectedMenuItem: {
          displayText: `r/${currentCommunity?.id}`,
          link: `/r/${currentCommunity?.id}`,
          Icon: FaReddit,
          imageURL: currentCommunity?.imageURL,
        } as DirectoryMenuItem,
      }));
    else {
      setDirectoryState((prev) => ({
        ...prev,
        selectedMenuItem: defaultMenuItem,
      }));
    }
  }, [communityStateValue.currentCommunity]);

  return { directoryState, toggleMenuOpen, onSelectMenuItem };
};
export default useDirectory;
