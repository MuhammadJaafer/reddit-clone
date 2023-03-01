import { Community } from "@/src/atoms/communitiesAtom";
import { firestore } from "@/src/firebase/clientApp";
import useCommunityData from "@/src/hooks/useCommunityData";
import {
  CommunityBox,
  RecommendationsContainer,
  RecommendationsHeader,
  RecommendationsItem,
  RecommendationsList,
} from "@/src/styles/Community.styled";
import { Button, NorText } from "@/src/styles/GlobalStyles";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaReddit } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";

type RecommendationsProps = {};

const Recommendations: React.FC<RecommendationsProps> = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(false);
  const { communityStateValue, onJoinOrLeaveCommunity } = useCommunityData();

  const getCommunityRecommendations = async () => {
    setLoading(true);
    try {
      const communityQuery = query(
        collection(firestore, "communities"),
        orderBy("numberOfMembers", "desc"),
        limit(5)
      );
      const communityDocs = await getDocs(communityQuery);
      const communities = communityDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCommunities(communities as Community[]);
    } catch (error) {
      console.log("getCommunityRecommendations error", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getCommunityRecommendations();
  }, []);

  return (
    <RecommendationsContainer>
      <RecommendationsHeader>
        <img src="/images/recCommsArt.png" />
        <NorText>Top Communities</NorText>
      </RecommendationsHeader>
      <RecommendationsList>
        {communities.map((com, i) => {
          const isJoined = !!communityStateValue.mySnippets.find(
            (item) => item.communityId === com?.id
          );

          return (
            <RecommendationsItem>
              <NorText>{i + 1}</NorText>
              <CommunityBox>
                {com.imageURL ? <img src={com.imageURL} /> : <FaReddit />}
                <NorText>r/{com.id}</NorText>
              </CommunityBox>
              <Button
                onClick={() => {
                  onJoinOrLeaveCommunity(com as Community, isJoined);
                }}
                outline={isJoined ? true : false}
              >
                {isJoined ? "Joined" : "Join"}
              </Button>
            </RecommendationsItem>
          );
        })}
      </RecommendationsList>
      <Button>View All</Button>
    </RecommendationsContainer>
  );
};
export default Recommendations;
