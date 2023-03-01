import { Community } from "@/src/atoms/communitiesAtom";
import { Post } from "@/src/atoms/PostsAtom";
import { auth, firestore } from "@/src/firebase/clientApp";
import usePosts from "@/src/hooks/usePosts";
import { PostsList } from "@/src/styles/Posts.styled";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PostItem from "./PostItem";
import PostLoader from "./PostLoader";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    postStateValue,
    setPostStateValue,
    onVote,
    onDeletePost,
    onSelectPost,
  } = usePosts();
  const getPosts = async () => {
    setLoading(true);
    try {
      const postsQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );

      const postDocs = await getDocs(postsQuery);

      const posts = postDocs.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setPostStateValue((prev) => ({ ...prev, posts: posts as Post[] }));
    } catch (error: any) {
      console.log("getPosts error", error);

      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, [communityData]);
  return (
    <>
      {loading ? (
        <PostsList>
          <PostLoader />
          <PostLoader />
          <PostLoader />
          <PostLoader />
        </PostsList>
      ) : (
        <PostsList>
          {postStateValue.posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              userIsCreator={user?.uid === post.creatorId}
              userVoteValue={
                postStateValue.postVotes.find((vote) => vote.postId === post.id)
                  ?.voteValue
              }
              onVote={onVote}
              onDeletePost={onDeletePost}
              onSelectPost={onSelectPost}
              isHomePage={false}
            />
          ))}
        </PostsList>
      )}
    </>
  );
};
export default Posts;
