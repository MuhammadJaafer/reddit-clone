import { Community, communityState } from "@/src/atoms/communitiesAtom";
import About from "@/src/components/Community/About";
import PageContent from "@/src/components/Layout/PageContent";
import NewPostForm from "@/src/components/Posts/NewPostForm";
import { auth } from "@/src/firebase/clientApp";
import useCommunityData from "@/src/hooks/useCommunityData";
import { SubmitPage } from "@/src/styles/Community.styled";
import { NorText, TitleBox } from "@/src/styles/GlobalStyles";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useRecoilValue } from "recoil";

type submitProps = {};

const SubmitPostPage: React.FC<submitProps> = () => {
  const [user] = useAuthState(auth);
  const { communityStateValue } = useCommunityData();
  return (
    <SubmitPage>
      <TitleBox>
        <NorText>Create a Post</NorText>
      </TitleBox>
      <PageContent>
        <>{user && <NewPostForm user={user} />}</>
        <>
          <About
            communityData={communityStateValue.currentCommunity as Community}
          />
        </>
      </PageContent>
    </SubmitPage>
  );
};
export default SubmitPostPage;
