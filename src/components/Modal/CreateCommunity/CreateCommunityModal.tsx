import {
  BolText,
  Button,
  ErrorText,
  FlexColumn,
  FlexRow,
  LigText,
  NorText,
} from "@/src/styles/GlobalStyles";
import {
  ModalOverlay,
  ModalC,
  ModalFooter,
  ModalBody,
  CommunityInput,
  CommunityType,
  CheckBox,
} from "@/src/styles/Modal.styled";
import React, { useState } from "react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import AuthInputs from "../Auth/AuthInputs";
import OAuthButtons from "../Auth/OAuthButtons";
import ResetPassword from "../Auth/ResetPassword";
import { HiLockClosed } from "react-icons/hi";
import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
  setDoc,
  Transaction,
} from "firebase/firestore";
import { firestore, auth } from "../../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiLoader2Fill } from "react-icons/ri";
import { useRouter } from "next/router";
type CreateCommunityModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  setOpen,
}) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [communityName, setCommunityName] = useState("");
  const [characterRemaining, setCharacterRemaining] = useState(21);
  const [communityType, setCommunityType] = useState("public");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 21) return;
    setCommunityName(e.target.value);
    setCharacterRemaining(21 - e.target.value.length);
  };
  const onCommunityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommunityType(e.target.name);
  };
  const handleCreateCommunity = async () => {
    if (error) setError(" ");
    //Validate the community
    const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(
        "Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores."
      );
      return;
    }
    setLoading(true);
    try {
      const communityDocRef = doc(firestore, "communities", communityName);

      await runTransaction(firestore, async (transaction) => {
        //Check that name is not taken
        const communityDoc = transaction.get(communityDocRef);
        if ((await communityDoc).exists()) {
          throw new Error(`Sorry, r/${communityName} is taken. Try another.`);
        }

        //Create community
        transaction.set(communityDocRef, {
          creatorId: user?.uid,
          createdAt: serverTimestamp(),
          numberOfMembers: 1,
          PrivacyType: communityType,
        });

        //Create community Snippet on user
        transaction.set(
          doc(firestore, `users/${user?.uid}/communitySnippets`, communityName),
          {
            communityId: communityName,
            isModerator: true,
          }
        );
      });
      setOpen(false);
      router.push(`/r/${communityName}`);
    } catch (error: any) {
      console.log("handleCreateCommunity error", error);
      setError(error.message);
    }

    setLoading(false);
  };
  return (
    <div>
      <ModalOverlay open={open}>
        <ModalC>
          <FiX onClick={() => setOpen(false)} />
          <h2>Create a community</h2>
          <ModalBody>
            <FlexColumn gap="0.1rem">
              <BolText>Name</BolText>
              <LigText>
                Community names including capitalization cannot by changed
              </LigText>
            </FlexColumn>
            <div>
              <CommunityInput>
                <LigText>r/</LigText>
                <input
                  type={"text"}
                  value={communityName}
                  onChange={handleChange}
                />
              </CommunityInput>

              <NorText style={{ color: characterRemaining === 0 ? "red" : "" }}>
                {characterRemaining} Characters remaining
              </NorText>
            </div>
            <ErrorText>{error}</ErrorText>
            <CommunityType>
              <BolText>Community Type</BolText>
              <CheckBox>
                <input
                  type="checkbox"
                  id="public"
                  name="public"
                  checked={communityType === "public"}
                  onChange={onCommunityTypeChange}
                />
                <BsFillPersonFill />
                <FlexRow gap="0rem">
                  <label htmlFor="public">Public</label>
                  <LigText>
                    Anyone can view, post, and comment to this community
                  </LigText>
                </FlexRow>
              </CheckBox>
              <CheckBox>
                <input
                  type="checkbox"
                  id="restricted"
                  name="restricted"
                  checked={communityType === "restricted"}
                  onChange={onCommunityTypeChange}
                />
                <BsFillEyeFill />
                <FlexRow gap="0rem">
                  <label htmlFor="restricted">Restricted</label>
                  <LigText>
                    Anyone can view this community, but only approved users can
                    post
                  </LigText>
                </FlexRow>
              </CheckBox>
              <CheckBox>
                <input
                  type="checkbox"
                  id="private"
                  name="private"
                  checked={communityType === "private"}
                  onChange={onCommunityTypeChange}
                />
                <HiLockClosed />
                <FlexRow gap="0rem">
                  <label htmlFor="private">Private</label>
                  <LigText>
                    Only approved users can view and submit to this community
                  </LigText>
                </FlexRow>
              </CheckBox>
            </CommunityType>
          </ModalBody>
          <ModalFooter>
            <Button outline={true} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              loading={loading}
              onClick={handleCreateCommunity}
            >
              {loading ? <RiLoader2Fill /> : "Create Community"}
            </Button>
          </ModalFooter>
        </ModalC>
      </ModalOverlay>
    </div>
  );
};
export default CreateCommunityModal;
