import Head from "next/head";
import Image from "next/image";
import { HomePage } from "../styles/Home.styled";
import PageContent from "../components/Layout/PageContent";
import CreatePostLink from "../components/Community/CreatePostLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/clientApp";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import usePosts from "../hooks/usePosts";
import { Post, PostVote } from "../atoms/PostsAtom";
import PostLoader from "../components/Posts/PostLoader";
import PostItem from "../components/Posts/PostItem";
import { PostsList } from "../styles/Posts.styled";
import useCommunityData from "../hooks/useCommunityData";
import Recommendations from "../components/Community/Recommendations";
import Premium from "../components/Community/Premium";
import PersonalHome from "../components/Community/PersonalHome";
import { Button, MorePosts } from "../styles/GlobalStyles";

export default function Home() {
  const [user, loadingUser] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const { communityStateValue } = useCommunityData();
  const [numberOfPosts, setNumberOfPosts] = useState(10);
  const {
    setPostStateValue,
    postStateValue,
    onDeletePost,
    onSelectPost,
    onVote,
  } = usePosts();
  const buildUserHomeFeed = async () => {
    setLoading(true);
    try {
      if (communityStateValue.mySnippets.length) {
        const myCommunityIds = communityStateValue.mySnippets.map(
          (snippet: any) => snippet.communityId
        );
        const postQuery = query(
          collection(firestore, "posts"),
          where("communityId", "in", myCommunityIds),
          limit(numberOfPosts)
        );
        const postDocs = await getDocs(postQuery);
        const posts = postDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPostStateValue((prev: any) => ({ ...prev, posts: posts as Post[] }));
      } else {
        buildNoUserHomeFeed();
      }
    } catch (error) {
      console.log("buildUserHomeFeed error", error);
    }
    setLoading(false);
  };

  const buildNoUserHomeFeed = async () => {
    setLoading(true);
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        orderBy("voteStatus", "desc"),
        limit(numberOfPosts)
      );
      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev: any) => ({ ...prev, posts: posts as Post[] }));
    } catch (error) {
      console.log("buildNoUserHomeFeed error", error);
    }
    setLoading(false);
  };

  const getUserPostVotes = async () => {
    try {
      const postIds = postStateValue.posts.map((post: Post) => post.id);
      const postVotesQuery = query(
        collection(firestore, `users/${user?.uid}/postVotes`),
        where("postId", "in", postIds)
      );
      const postVotesDocs = await getDocs(postVotesQuery);
      const postVotes = postVotesDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostStateValue((prev: any) => ({
        ...prev,
        postVotes: postVotes as PostVote[],
      }));
    } catch (error) {
      console.log("getUserPostVotes error", error);
    }
  };

  //useEffects
  useEffect(() => {
    if (!loadingUser && !user) {
      buildNoUserHomeFeed();
    }
  }, [user, loadingUser, numberOfPosts]);

  useEffect(() => {
    if (communityStateValue.snippetsFetched) {
      buildUserHomeFeed();
    }
  }, [communityStateValue.snippetsFetched, numberOfPosts]);

  useEffect(() => {
    if (user && postStateValue.posts.length) getUserPostVotes();
    return () => {
      setPostStateValue((prev: any) => ({ ...prev, postVotes: [] }));
    };
  }, [user, postStateValue.posts, numberOfPosts]);
  return (
    <HomePage>
      <PageContent>
        <>
          <CreatePostLink />
          {loading ? (
            <PostsList>
              <PostLoader />
              <PostLoader />
              <PostLoader />
              <PostLoader />
            </PostsList>
          ) : (
            <PostsList>
              {postStateValue.posts.map((post: Post) => (
                <PostItem
                  key={post.id}
                  post={post}
                  userIsCreator={user?.uid === post.creatorId}
                  userVoteValue={
                    postStateValue.postVotes.find(
                      (vote: any) => vote.postId === post.id
                    )?.voteValue
                  }
                  onVote={onVote}
                  onDeletePost={onDeletePost}
                  onSelectPost={onSelectPost}
                  isHomePage={true}
                />
              ))}
            </PostsList>
          )}
          <MorePosts
            onClick={() => {
              setNumberOfPosts((prev) => (prev += 10));
            }}
          >
            More Posts?
          </MorePosts>
        </>
        <>
          <Recommendations />
          <Premium />
          <PersonalHome />
        </>
      </PageContent>
    </HomePage>
  );
}
