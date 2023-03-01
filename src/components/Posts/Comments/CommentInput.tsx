import {
  Button,
  LinkText,
  NorText,
  TextAreaInput,
} from "@/src/styles/GlobalStyles";
import {
  CommentInputContainer,
  CommentTitle,
  CommentInputBody,
  CommentFooter,
} from "@/src/styles/Posts.styled";
import { User } from "firebase/auth";
import React, { use } from "react";
import { RiLoader2Fill } from "react-icons/ri";

type CommentInputProps = {
  commentText: string;
  setCommentText: (value: string) => void;
  user: User;
  createLoading: boolean;
  onCreateComment: (commentText: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = ({
  commentText,
  setCommentText,
  user,
  createLoading,
  onCreateComment,
}) => {
  return (
    <CommentInputContainer>
      {user ? (
        <>
          <CommentTitle>
            <NorText>Comment as </NorText>
            <LinkText>
              {user.displayName || user?.email?.split("@")[0]}
            </LinkText>
          </CommentTitle>
          <CommentInputBody>
            <TextAreaInput
              placeholder="What are your thoughts?"
              name="comment"
              required
              rows={7}
              onChange={(e) => {
                setCommentText(e.target.value);
              }}
              value={commentText}
            />
            <CommentFooter>
              <Button
                disabled={!commentText.length}
                loading={createLoading}
                onClick={() => {
                  onCreateComment(commentText);
                }}
              >
                {createLoading ? <RiLoader2Fill /> : "Comment"}
              </Button>
            </CommentFooter>
          </CommentInputBody>
        </>
      ) : (
        <></>
      )}
    </CommentInputContainer>
  );
};
export default CommentInput;
