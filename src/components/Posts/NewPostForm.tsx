import React, { useState } from "react";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { BiPoll } from "react-icons/bi";
import {
  CreateNewPostForm,
  FormBody,
  FormNav,
} from "@/src/styles/Posts.styled";
import { IconType } from "react-icons";
import TabItem from "./TabItem";
import { async } from "@firebase/util";
import TextInputs from "./PostForm/TextInputs";
import ImageUpload from "./PostForm/ImageUpload";
import { Post } from "@/src/atoms/PostsAtom";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "@/src/firebase/clientApp";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

import Error1 from "../Error/Error1";
import useSelectFile from "@/src/hooks/useSelectFile";
import useCommunityData from "@/src/hooks/useCommunityData";
type NewPostFormProps = {
  user: User;
};
const formTabs: TabItemType[] = [
  { title: "Post", icon: IoDocumentText },
  { title: "Images & Video", icon: IoImageOutline },
  { title: "Link", icon: BsLink45Deg },
  { title: "Poll", icon: BiPoll },
  { title: "Talk", icon: BsMic },
];

export type TabItemType = {
  title: string;
  icon: IconType;
};
const NewPostForm: React.FC<NewPostFormProps> = ({ user }) => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const [textInputs, setTextInputs] = useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { selectedFile, setSelectedFile, onSelectFile } = useSelectFile();
  const { communityStateValue } = useCommunityData();
  const handleCreatePost = async () => {
    const { communityId } = router.query;
    let newPost: Post = {
      communityId: communityId as string,
      creatorId: user?.uid,
      creatorDisplayName:
        (user.email?.split("@")[0] as string) || (user.displayName as string),
      title: textInputs.title,
      body: textInputs.body,
      numberOfComments: 0,
      voteStatus: 0,
      createdAt: serverTimestamp() as Timestamp,
    };
    if (communityStateValue.currentCommunity?.imageURL)
      newPost = {
        ...newPost,
        communityImageURL: communityStateValue.currentCommunity?.imageURL,
      };
    setLoading(true);
    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);

      if (selectedFile) {
        const imageRef = ref(storage, `posts/${postDocRef.id}/image`);
        await uploadString(imageRef, selectedFile, "data_url");
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(postDocRef, {
          imageURL: downloadURL,
        });
      }
      router.back();
    } catch (error) {
      console.log("handleCreatePost error", error);
      setError(true);
    }
    setLoading(false);
  };

  const onTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    setTextInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <CreateNewPostForm>
      <FormNav>
        {formTabs.map((item, i) => (
          <TabItem
            key={i}
            item={item}
            selected={item.title === selectedTab}
            setSelected={setSelectedTab}
          />
        ))}
      </FormNav>
      <FormBody>
        {selectedTab === "Post" && (
          <TextInputs
            textInputs={textInputs}
            handleCreatePost={handleCreatePost}
            onChange={onTextChange}
            loading={loading}
          />
        )}
        {selectedTab === "Images & Video" && (
          <ImageUpload
            onSelectImage={onSelectFile}
            selectedFile={selectedFile}
            SetSelectedTab={setSelectedTab}
            setSelectedFile={setSelectedFile}
          />
        )}
      </FormBody>
      {error && <Error1 error={"Error creating post"} />}
    </CreateNewPostForm>
  );
};
export default NewPostForm;
