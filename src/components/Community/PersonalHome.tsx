import { PersonalHomeContainer } from "@/src/styles/Community.styled";
import { BolText, Button, FlexRow, NorText } from "@/src/styles/GlobalStyles";
import React from "react";
import { FaReddit } from "react-icons/fa";

type PersonalHomeProps = {};

const PersonalHome: React.FC<PersonalHomeProps> = () => {
  return (
    <PersonalHomeContainer>
      <img src="/images/redditPersonalHome.png" />
      <FlexRow gap="0rem">
        <FaReddit />
        <BolText>Home</BolText>
      </FlexRow>
      <NorText>Your personal Reddit frontpage, built for you.</NorText>
      <Button>Create Post</Button>
      <Button outline={true}>Create Community</Button>
    </PersonalHomeContainer>
  );
};
export default PersonalHome;
