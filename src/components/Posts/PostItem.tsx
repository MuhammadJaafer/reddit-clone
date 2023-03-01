import { Post } from "@/src/atoms/PostsAtom";
import { BolText, LigText, Loader, NorText } from "@/src/styles/GlobalStyles";
import { HomePage } from "@/src/styles/Home.styled";
import { IconsBox } from "@/src/styles/Navbar.styled";
import {
  DownVoteIcon,
  PostBody,
  PostFooter,
  PostContainer,
  PostDescription,
  PostImage,
  PostInfo,
  PostTitle,
  PostVoteContainer,
  UpVoteIcon,
  VoteNumber,
  PostSkeleton3,
} from "@/src/styles/Posts.styled";
import { async } from "@firebase/util";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import Error1 from "../Error/Error1";

type PostItemProps = {
  post: Post;
  isHomePage: boolean;
  userIsCreator: boolean;
  userVoteValue: number | undefined;
  onVote: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    post: Post,
    vote: number,
    communityId: string
  ) => void;
  onDeletePost: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    post: Post
  ) => Promise<boolean>;
  onSelectPost?: (post: Post) => void;
};

const PostItem: React.FC<PostItemProps> = ({
  post,
  userIsCreator,
  userVoteValue,
  onDeletePost,
  onSelectPost,
  onVote,
  isHomePage,
}) => {
  const router = useRouter();
  const [loadingImage, setLoadingImage] = useState(true);
  const [error, setError] = useState("");
  const [loadingDelete, setLoadingDelete] = useState(false);
  const singlePostPage: boolean = !onSelectPost;

  const handleDelete = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setLoadingDelete(true);
    try {
      const success = await onDeletePost(event, post);
      if (!success) throw new Error("Failed to delete post");
      if (singlePostPage) router.push(`/r/${post.communityId}`);
    } catch (error: any) {
      console.log("handleDelete error", error);
      setError(error.message);
    }
    setLoadingDelete(false);
  };
  return (
    <PostContainer
      singlePostPage={singlePostPage}
      onClick={() => {
        onSelectPost && onSelectPost(post);
      }}
    >
      <PostVoteContainer singlePostPage={singlePostPage}>
        <UpVoteIcon
          userVoteValue={userVoteValue}
          onClick={(e) => onVote(e, post, 1, post.communityId)}
        >
          {userVoteValue === 1 ? (
            <IoArrowUpCircleSharp />
          ) : (
            <IoArrowUpCircleOutline />
          )}
        </UpVoteIcon>
        <VoteNumber userVoteValue={userVoteValue}>{post.voteStatus}</VoteNumber>
        <DownVoteIcon
          userVoteValue={userVoteValue}
          onClick={(e) => onVote(e, post, -1, post.communityId)}
        >
          {userVoteValue === -1 ? (
            <IoArrowDownCircleSharp />
          ) : (
            <IoArrowDownCircleOutline />
          )}
        </DownVoteIcon>
      </PostVoteContainer>
      <PostBody>
        {error && <Error1 error={error} />}
        <PostInfo>
          {isHomePage && (
            <>
              <div>
                {post.communityImageURL ? (
                  <img src={post.communityImageURL}></img>
                ) : (
                  <FaReddit />
                )}

                <NorText
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/r/${post.communityId}`);
                  }}
                >
                  r/{post.communityId}
                </NorText>
              </div>
              <BsDot />
            </>
          )}
          <LigText>Posted by u/{post.creatorDisplayName}</LigText>
          <LigText>
            {moment(new Date(post.createdAt.seconds * 1000)).fromNow()}
          </LigText>
        </PostInfo>
        <PostTitle>
          <BolText>{post.title}</BolText>
        </PostTitle>
        {post.body && (
          <PostDescription>
            <NorText>{post.body}</NorText>
          </PostDescription>
        )}
        {post.imageURL && (
          <>
            {loadingImage && <PostSkeleton3></PostSkeleton3>}
            <PostImage
              src={post.imageURL}
              alt="post image"
              onLoad={() => setLoadingImage(false)}
            />
          </>
        )}
        <PostFooter>
          <IconsBox>
            <BsChat />
            <LigText>{post.numberOfComments} Comments</LigText>
          </IconsBox>
          <IconsBox>
            <IoArrowRedoOutline />
            <LigText>Share</LigText>
          </IconsBox>
          <IconsBox>
            <IoBookmarkOutline />
            <LigText>Save</LigText>
          </IconsBox>
          {userIsCreator && (
            <IconsBox onClick={(e) => handleDelete(e)}>
              {loadingDelete ? (
                <Loader>
                  <FiLoader />
                </Loader>
              ) : (
                <>
                  <AiOutlineDelete />
                  <LigText>Delete</LigText>
                </>
              )}
            </IconsBox>
          )}
        </PostFooter>{" "}
      </PostBody>
    </PostContainer>
  );
};
export default PostItem;
