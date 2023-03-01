import styled from "styled-components";
import css from "styled-jsx/css";
import { skeletonLoading } from "./Animations.styled";
import {
  BolText,
  Button,
  LigText,
  NorText,
  TextAreaInput,
} from "./GlobalStyles";
import { IconsBox } from "./Navbar.styled";

export interface tabProps {
  selected: boolean;
}

interface postProps {
  userVoteValue?: number | undefined;
  singlePostPage?: boolean;
}
export const CreateNewPostForm = styled.div`
  background: ${({ theme }) => theme.color_tertiary};
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`;
export const TabC = styled.div<tabProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  height: 5rem;
  color: ${({ theme }) => theme.color_text_light};
  transition: all 0.1s;
  color: ${(props) =>
    props.selected
      ? props.theme.color_secondary
      : props.theme.color_text_light};
  ${(props) =>
    props.selected
      ? `
          border-bottom: 3px solid ${props.theme.color_secondary};
        `
      : `
          border-bottom: 1px solid ${props.theme.color_hover};
        `}
  & > svg {
    width: 2rem;
    height: 2rem;
    color: currentColor;
    margin-right: 0.4rem;
  }
  & ${NorText} {
    color: currentColor;
    white-space: nowrap;
    font-weight: 500;
  }
  padding: 0 1rem;
  &:hover {
    background: ${({ theme }) => theme.color_secondary + "10"};
  }
`;

export const FormNav = styled.div`
  display: flex;
  width: 100%;
  & ${TabC}:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color_hover};
  }
`;
export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
export const TextInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & ${Button} {
    width: fit-content;
    align-self: end;
    padding: 0 3rem;
  }
`;

export const ImageUploadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & > img {
    max-width: 40rem;
    max-height: 40rem;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
`;

export const PostContainer = styled.div<postProps>`
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.color_tertiary};
  border-radius: ${(props) =>
    props.singlePostPage ? ".3rem .3rem 0 0" : "0.3rem"};
  display: flex;
  cursor: ${(props) => (props.singlePostPage ? "" : "pointer")};
  overflow: hidden;
  border: 1px solid transparent;
  &:hover {
    border: ${(props) =>
      props.singlePostPage
        ? "1px solid transparent"
        : `1px solid ${props.theme.color_tertiary_dark}`};
  }
`;

export const PostVoteContainer = styled.div<postProps>`
  width: 3.5rem;
  background: ${(props) =>
    props.singlePostPage
      ? props.theme.color_tertiary
      : props.theme.color_tertiary_light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.2rem;
  padding: 0.5rem 0;
`;

export const UpVoteIcon = styled.div<postProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  color: ${(props) =>
    props.userVoteValue === 1 ? "#ff4500" : props.theme.color_text_light};
  &:hover {
    color: #ff4500bb;
  }
`;
export const VoteNumber = styled.div<postProps>`
  font-size: 1.4rem;
  color: ${(props) => {
    if (props.userVoteValue === 1) return "#ff4500";
    else if (props.userVoteValue === -1) return "#7193ff";
    else return props.theme.color_text;
  }};
`;
export const DownVoteIcon = styled.div<postProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  color: ${(props) =>
    props.userVoteValue === -1 ? "#7193ff" : props.theme.color_text_light};
  &:hover {
    color: #7193ffbb;
  }
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 0.5rem;
`;
export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.1rem !important;
  & > svg {
    color: ${({ theme }) => theme.color_text};
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    & > img,
    & > svg {
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      color: ${({ theme }) => theme.color_secondary};
    }
    & ${NorText} {
      font-weight: 500;
      font-size: 1.2rem !important;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
export const PostTitle = styled.div`
  & ${BolText} {
    font-size: 2rem !important;
  }
`;
export const PostDescription = styled.div``;
export const PostImage = styled.img`
  width: 100%;
  max-height: 60rem;
  object-fit: contain;
`;
export const PostFooter = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;

  & ${IconsBox} {
    display: flex;
    gap: 0.6rem;
    & ${LigText} {
      font-size: 1.3rem !important;
    }
  }
`;
export const PostSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color_tertiary};
  border-radius: 0.3rem;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  padding: 1rem 0;
`;
export const PostSkeletonLeft = styled.div`
  width: 3.5rem;
  background: ${({ theme }) => theme.color_tertiary_light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  padding: 0.5rem 0;
  & > svg {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.color_text_light};
  }
`;
export const PostSkeletonRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 0.5rem;
`;
export const PostSkeleton1 = styled.div`
  width: 30%;
  height: 2.5rem;
  background: ${({ theme }) => theme.color_body};
  border-radius: 0.3rem;
  animation: ${skeletonLoading} 1s infinite linear;
`;
export const PostSkeleton2 = styled.div`
  width: 70%;
  height: 2.5rem;
  background: ${({ theme }) => theme.color_body};
  border-radius: 0.3rem;
  animation: ${skeletonLoading} 1.1s infinite linear;
`;
export const PostSkeleton3 = styled.div`
  width: 100%;
  height: 30rem;
  background: ${({ theme }) => theme.color_body};
  border-radius: 0.3rem;
  animation: ${skeletonLoading} 1.2s infinite linear;
`;

//comments styling

export const CommentContainer = styled.div`
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.color_tertiary};
  padding: 1rem 3rem;
`;

export const CommentsListContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;
`;

export const CommentInputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.3rem;
  overflow: hidden;
`;

export const CommentTitle = styled.div`
  width: 100%;
`;

export const CommentInputBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & ${TextAreaInput} {
    border-radius: 0.3rem 0.3rem 0 0;
  }
`;

export const CommentFooter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: end;
  padding: 0.5rem;
  background: ${({ theme }) => theme.color_body};
  & ${Button} {
    padding: 0.5rem 2rem;
    min-width: 8rem;
  }
`;

export const CommentItemContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 1rem;
  align-items: start;
  justify-content: start;
`;
export const CommentItemImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  & > svg {
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.color_tertiary_dark};
  }
`;
export const CommentItemBody = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: start;
`;
export const CommentInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: start;
  width: 100%;
  & ${BolText} {
  }
  & ${LigText} {
    font-size: 1.3rem !important;
  }
`;
export const CommentText = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 1.6rem;
`;
export const CommentItemFooter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  & > svg {
    width: 2.3rem;
    height: 2.3rem;
    color: ${({ theme }) => theme.color_text_light};
  }
  & ${NorText} {
    font-size: 1.3rem !important;
  }
`;

export const CommentSkeleton = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
  & > svg {
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.color_body};
  }
`;

export const NoComments = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & ${LigText} {
    font-size: 1.7rem !important;
  }
`;
