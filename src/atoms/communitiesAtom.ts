import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restricted" | "private";
  createdAt: Timestamp;
  imageURL?: string;
}

export interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
}

interface communityState {
  mySnippets: CommunitySnippet[];
  currentCommunity?: Community | null;
  snippetsFetched: boolean;
}

const defaultCommunityState: communityState = {
  mySnippets: [],
  snippetsFetched: false,
};

export const communityState = atom<communityState>({
  key: "communityState",
  default: defaultCommunityState,
});
