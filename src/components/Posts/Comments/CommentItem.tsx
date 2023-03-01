import { BolText, LigText, Loader, NorText } from "@/src/styles/GlobalStyles";
import { IconsBox } from "@/src/styles/Navbar.styled";
import {
  CommentInfo,
  CommentItemBody,
  CommentItemContainer,
  CommentItemFooter,
  CommentItemImage,
  CommentText,
} from "@/src/styles/Posts.styled";
import { Timestamp } from "firebase/firestore";
import moment from "moment";
import React from "react";
import { FaReddit } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
export type Comment = {
  id: string;
  creatorId: string;
  creatorDisplayText: string;
  communityId: string;
  postId: string;
  PostTitle: string;
  text: string;
  createdAt: Timestamp;
};
type CommentItemProps = {
  comment: Comment;
  onDeleteComment: (comment: Comment) => void;
  loadingDelete: boolean;
  userId: string;
};

const CommentItem: React.FC<CommentItemProps> = ({
  userId,
  onDeleteComment,
  loadingDelete,
  comment,
}) => {
  return (
    <CommentItemContainer>
      <CommentItemImage>
        <FaReddit />
      </CommentItemImage>
      <CommentItemBody>
        <CommentInfo>
          <BolText>{comment.creatorDisplayText}</BolText>
          <LigText>
            {moment(new Date(comment.createdAt.seconds * 1000)).fromNow()}
          </LigText>
        </CommentInfo>
        <CommentText>
          <NorText>{comment.text}</NorText>
        </CommentText>
        <CommentItemFooter>
          <IoArrowUpCircleOutline />
          <IoArrowDownCircleOutline />
          {userId === comment.creatorId && (
            <>
              <IconsBox>
                <NorText>Edit</NorText>
              </IconsBox>
              <IconsBox onClick={() => onDeleteComment(comment)}>
                {loadingDelete ? (
                  <Loader>
                    <FiLoader />
                  </Loader>
                ) : (
                  <NorText>Delete</NorText>
                )}
              </IconsBox>
            </>
          )}
        </CommentItemFooter>
      </CommentItemBody>
    </CommentItemContainer>
  );
};
export default CommentItem;
