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
type CreateCommunityModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  setOpen,
}) => {
  const [communityName, setCommunityName] = useState("");
  const [characterRemaining, setCharacterRemaining] = useState(21);
  const [communityType, setCommunityType] = useState("public");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 21) return;
    setCommunityName(e.target.value);
    setCharacterRemaining(21 - e.target.value.length);
  };
  const onCommunityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommunityType(e.target.name);
  };
  const handleCreateCommunity = async () => {};
  return (
    <div>
      <ModalOverlay open={open}>
        <form>
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

                <NorText
                  style={{ color: characterRemaining === 0 ? "red" : "" }}
                >
                  {characterRemaining} Characters remaining
                </NorText>
              </div>
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
                      Anyone can view this community, but only approved users
                      can post
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
              <Button outline={true}>Cancel</Button>
              <Button type="submit">Create Community</Button>
            </ModalFooter>
          </ModalC>
        </form>
      </ModalOverlay>
    </div>
  );
};
export default CreateCommunityModal;
