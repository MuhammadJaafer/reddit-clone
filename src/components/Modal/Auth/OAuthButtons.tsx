import { auth } from "@/src/firebase/clientApp";
import {
  Button,
  ErrorText,
  FlexColumn,
  OAuthButton,
} from "@/src/styles/GlobalStyles";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { RiLoader2Fill } from "react-icons/ri";
type OAuthButtonsProps = {
  size?: string;
  gap?: string;
  loading?: boolean;
};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
