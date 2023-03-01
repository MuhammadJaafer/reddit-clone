import { Community, communityState } from "@/src/atoms/communitiesAtom";
import { auth, firestore, storage } from "@/src/firebase/clientApp";
import useSelectFile from "@/src/hooks/useSelectFile";
import { rotate } from "@/src/styles/Animations.styled";
import {
  AboutBody,
  AboutContainer,
  AboutCreatedAt,
  AboutHeader,
  AboutInfo,
  ChangeImage,
} from "@/src/styles/Community.styled";
import { Button, LinkText, NorText } from "@/src/styles/GlobalStyles";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaReddit } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCakeLine, RiLoader2Fill } from "react-icons/ri";
import { useRecoilValue, useSetRecoilState } from "recoil";

type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const { selectedFile, setSelectedFile, onSelectFile } = useSelectFile();
  const [uploadingImage, setUploadingImage] = useState(false);
  const setCommunityStateValue = useSetRecoilState(communityState);
  const communityStateValue = useRecoilValue(communityState);
  const onUpdateImage = async () => {
    if (!selectedFile) return;
    setUploadingImage(true);
    try {
      const imageRef = ref(storage, `communities/${communityData.id}/image`);
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(firestore, "communities", communityData.id), {
        imageURL: downloadURL,
      });
      setCommunityStateValue((prev) => ({
        ...prev,
        currentCommunity: {
          ...prev.currentCommunity,
          imageURL: downloadURL,
        } as Community,
      }));
    } catch (error: any) {
      console.log("onUpdateImage error", error);
    }
    setUploadingImage(false);
  };
  return (
    <AboutContainer>
      <AboutHeader>
        <NorText>About Community</NorText>
        <HiOutlineDotsHorizontal />
      </AboutHeader>
      <AboutBody>
        <AboutInfo>
          <NorText>
            {communityStateValue?.currentCommunity?.numberOfMembers.toLocaleString()}
          </NorText>
          <NorText>{1}</NorText>
          <NorText>Members</NorText>
          <NorText>Online</NorText>
        </AboutInfo>
        <AboutCreatedAt>
          <RiCakeLine />
          <NorText>
            Created&nbsp;
            {communityData.createdAt &&
              moment(new Date(communityData.createdAt.seconds * 1000)).format(
                "MMM DD, YYYY"
              )}
          </NorText>
        </AboutCreatedAt>
        <Link href={`/r/${router.query.communityId}/submit`}>
          <Button>Create Post</Button>
        </Link>
        {user?.uid === communityData.creatorId && (
          <>
            <NorText>Admin</NorText>
            <ChangeImage>
              <LinkText
                onClick={() => {
                  selectedFileRef.current?.click();
                }}
              >
                Change Image
              </LinkText>
              {communityData.imageURL || selectedFile ? (
                <img
                  src={selectedFile || communityData.imageURL}
                  alt="community image"
                />
              ) : (
                <FaReddit />
              )}
            </ChangeImage>
          </>
        )}
        {selectedFile && (
          <Button
            loading={uploadingImage}
            onClick={() => {
              onUpdateImage();
            }}
          >
            {uploadingImage ? <RiLoader2Fill /> : "Save Changes"}
          </Button>
        )}
      </AboutBody>
      <input
        type={"file"}
        hidden
        ref={selectedFileRef}
        onChange={onSelectFile}
        accept="image/x-png,image/gif,image/jpeg"
      />
    </AboutContainer>
  );
};
export default About;
