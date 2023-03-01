import { Community } from "@/src/atoms/communitiesAtom";
import useCommunityData from "@/src/hooks/useCommunityData";
import {
  BlueBackground,
  ComBackground,
  ComHeader,
  ComName,
} from "@/src/styles/Community.styled";
import {
  BolText,
  Button,
  FlexRow,
  LigText,
  NorText,
} from "@/src/styles/GlobalStyles";
import React from "react";
import { FaReddit } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { communityStateValue, onJoinOrLeaveCommunity, loading } =
    useCommunityData();
  const isJoined = !!communityStateValue.mySnippets.find(
    (item) => item.communityId === communityStateValue.currentCommunity?.id
  );
  return (
    <ComHeader>
      <BlueBackground />
      <ComBackground>
        <FlexRow>
          {communityStateValue.currentCommunity?.imageURL ? (
            <img
              src={communityStateValue.currentCommunity?.imageURL}
              alt="community image"
            />
          ) : (
            <FaReddit />
          )}

          <ComName>
            <BolText>{communityStateValue.currentCommunity?.id}</BolText>
            <LigText>r/{communityStateValue.currentCommunity?.id}</LigText>
          </ComName>
          <Button
            onClick={() => {
              onJoinOrLeaveCommunity(
                communityStateValue.currentCommunity as Community,
                isJoined
              );
            }}
            outline={isJoined ? true : false}
            loading={loading}
          >
            {loading ? <RiLoader2Fill /> : isJoined ? "Joined" : "Join"}
          </Button>
        </FlexRow>
      </ComBackground>
    </ComHeader>
  );
};
export default Header;
