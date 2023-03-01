import { authModalState } from "@/src/atoms/authModalAtoms";
import { communityState } from "@/src/atoms/communitiesAtom";
import { auth } from "@/src/firebase/clientApp";
import useDirectory from "@/src/hooks/useDirectory";
import { CreatePostC } from "@/src/styles/Community.styled";
import { TextInput } from "@/src/styles/GlobalStyles";
import { IconsBox } from "@/src/styles/Navbar.styled";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsLink45Deg } from "react-icons/bs";
import { FaRedditSquare } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";

type CreatePostLinkProps = {};

const CreatePostLink: React.FC<CreatePostLinkProps> = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const { toggleMenuOpen } = useDirectory();
  const { currentCommunity } = useRecoilValue(communityState);
  const onClick = () => {
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }
    if (!currentCommunity) {
      const directoryList =
        document.querySelector(".directoryMenuList")?.parentElement;
      directoryList?.removeAttribute("hidden");

      return;
    }

    const { communityId } = router.query;
    router.push(`/r/${communityId}/submit`);
  };

  return (
    <CreatePostC onClick={onClick}>
      <FaRedditSquare />
      <TextInput type={"text"} placeholder="Create Post" />
      <IconsBox>
        <IoImageOutline />
      </IconsBox>
      <IconsBox>
        <BsLink45Deg />
      </IconsBox>
    </CreatePostC>
  );
};
export default CreatePostLink;
