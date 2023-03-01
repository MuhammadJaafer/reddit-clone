import { NorText } from "@/src/styles/GlobalStyles";
import {
  PostSkeleton,
  PostSkeleton1,
  PostSkeleton2,
  PostSkeleton3,
  PostSkeletonLeft,
  PostSkeletonRight,
} from "@/src/styles/Posts.styled";
import React from "react";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowDownSharp,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
} from "react-icons/io5";

type PostLoaderProps = {};

const PostLoader: React.FC<PostLoaderProps> = () => {
  return (
    <PostSkeleton>
      <PostSkeletonLeft>
        <IoArrowUpCircleOutline />
        <NorText></NorText>
        <IoArrowDownCircleOutline />
      </PostSkeletonLeft>
      <PostSkeletonRight>
        <PostSkeleton1></PostSkeleton1>
        <PostSkeleton2></PostSkeleton2>
        <PostSkeleton3></PostSkeleton3>
        <PostSkeleton1></PostSkeleton1>
      </PostSkeletonRight>
    </PostSkeleton>
  );
};
export default PostLoader;
