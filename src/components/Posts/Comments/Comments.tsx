import { Post, postState } from "@/src/atoms/PostsAtom";
import { firestore } from "@/src/firebase/clientApp";
import { LigText, NorText } from "@/src/styles/GlobalStyles";
import {
  CommentContainer,
  CommentSkeleton,
  CommentsListContainer,
  NoComments,
  PostSkeleton1,
  PostSkeleton3,
} from "@/src/styles/Posts.styled";
import { User } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import React, { use, useEffect, useState } from "react";
import { FaReddit } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import CommentInput from "./CommentInput";
import CommentItem, { Comment } from "./CommentItem";

type CommentsProps = {
  user: User;
  selectedPost: Post | null;
  communityId: string;
};

const Comments: React.FC<CommentsProps> = ({
  user,
  selectedPost,
  communityId,
}) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [createLoading, setCreateLoading] = useState(false);
  const [loadingDeleteId, setLoadingDeleteId] = useState("");
  const setPostState = useSetRecoilState(postState);
  const onCreateComment = async (commentText: string) => {
    setCreateLoading(true);
    try {
      const batch = writeBatch(firestore);

      // create comment document
      const commentDocRef = doc(collection(firestore, "comments"));
      const newComment: Comment = {
        id: commentDocRef.id,
        creatorId: user.uid,
        creatorDisplayText: user.email!.split("@")[0],
        communityId,
        postId: selectedPost?.id!,
        PostTitle: selectedPost?.title!,
        text: commentText,
        createdAt: serverTimestamp() as Timestamp,
      };
      batch.set(commentDocRef, newComment);

      newComment.createdAt = { seconds: Date.now() / 1000 } as Timestamp;
      // update post numberOfComments +1
      const postDocRef = doc(collection(firestore, "posts"), selectedPost?.id!);
      batch.update(postDocRef, {
        numberOfComments: increment(1),
      });

      await batch.commit();

      // update client recoil state
      setCommentText("");
      setComments((prev) => [newComment, ...prev]);
      setPostState((prev: any) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments! + 1,
        } as Post,
      }));
    } catch (error) {
      console.log("onCreateComment error", error);
    }
    setCreateLoading(false);
  };
  const onDeleteComment = async (comment: Comment) => {
    setLoadingDeleteId(comment.id);
    try {
      const batch = writeBatch(firestore);
      // delete comment document
      const commentDocRef = doc(firestore, "comments", comment.id);
      batch.delete(commentDocRef);
      // update post numberOfComments -1
      const postDocRef = doc(firestore, "posts", selectedPost?.id!);
      batch.update(postDocRef, {
        numberOfComments: increment(-1),
      });
      await batch.commit();
      // update client recoil state
      setPostState((prev: any) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments! - 1,
        } as Post,
      }));
      setComments((prev) => prev.filter((item) => item.id !== comment.id));
    } catch (error) {
      console.log("onDeleteComment error ", error);
    }
    setLoadingDeleteId("");
  };
  const getPostComments = async () => {
    if (!selectedPost) return;
    try {
      const commentsQuery = query(
        collection(firestore, "comments"),
        where("postId", "==", selectedPost?.id),
        orderBy("createdAt", "desc")
      );
      const commentDocs = await getDocs(commentsQuery);
      const comments = commentDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(comments as Comment[]);
    } catch (error) {
      console.log("getPostComments error", error);
    }
    setFetchLoading(false);
  };
  useEffect(() => {
    getPostComments();
  }, [selectedPost]);
  return (
    <CommentContainer>
      {fetchLoading ? (
        <>
          <PostSkeleton3></PostSkeleton3>
        </>
      ) : (
        <CommentInput
          commentText={commentText}
          setCommentText={setCommentText}
          onCreateComment={onCreateComment}
          user={user}
          createLoading={createLoading}
        />
      )}
      <CommentsListContainer>
        {fetchLoading ? (
          [0, 1, 2, 3].map((item, i) => (
            <CommentSkeleton key={i}>
              <FaReddit />
              <PostSkeleton1></PostSkeleton1>
            </CommentSkeleton>
          ))
        ) : (
          <>
            {comments.length === 0 ? (
              <NoComments>
                <LigText>No Comments Yet</LigText>
              </NoComments>
            ) : (
              comments.map((comment) => (
                <CommentItem
                  comment={comment}
                  onDeleteComment={onDeleteComment}
                  loadingDelete={comment.id === loadingDeleteId}
                  userId={user?.uid}
                  key={comment.id}
                />
              ))
            )}
          </>
        )}
      </CommentsListContainer>
    </CommentContainer>
  );
};
export default Comments;
