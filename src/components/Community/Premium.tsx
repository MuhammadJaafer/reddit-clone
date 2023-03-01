import { PremiumContainer } from "@/src/styles/Community.styled";
import { BolText, Button, NorText } from "@/src/styles/GlobalStyles";
import React from "react";
import { GiCheckedShield } from "react-icons/gi";
type PremiumProps = {};

const Premium: React.FC<PremiumProps> = () => {
  return (
    <PremiumContainer>
      <GiCheckedShield />
      <BolText>Reddit Premium</BolText>
      <NorText>The best Reddit experience, with monthly Coins</NorText>
      <Button>Try Now</Button>
    </PremiumContainer>
  );
};
export default Premium;
