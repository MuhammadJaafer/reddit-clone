import { auth, firestore } from "@/src/firebase/clientApp";
import {
  Button,
  ErrorText,
  FlexColumn,
  OAuthButton,
} from "@/src/styles/GlobalStyles";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { RiLoader2Fill } from "react-icons/ri";
type OAuthButtonsProps = {
  size?: string;
  gap?: string;
  loading?: boolean;
};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if (user) {
      createUserDocument(user.user);
    }
  }, [user]);
  return (
    <FlexColumn gap="0.5rem">
      <OAuthButton
        loading={loading}
        onClick={() => {
          signInWithGoogle();
        }}
      >
        {loading ? (
          <RiLoader2Fill />
        ) : (
          <>
            <img src="/images/googlelogo.png" alt="google" />
            Continue with Google
          </>
        )}
      </OAuthButton>
      <OAuthButton>Some other Provider</OAuthButton>
      {error && <ErrorText>{error.message}</ErrorText>}
    </FlexColumn>
  );
};
export default OAuthButtons;
