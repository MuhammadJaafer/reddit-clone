import { authModalState } from "@/src/atoms/authModalAtoms";
import { auth } from "@/src/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";
import {
  ErrorText,
  Button,
  NorText,
  ImpText,
  BolText,
  FlexRow,
} from "@/src/styles/GlobalStyles";
import { Form, FormC } from "@/src/styles/Modal.styled";
import error from "next/error";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { RiLoader2Fill } from "react-icons/ri";
import { useSetRecoilState } from "recoil";
import { BsDot, BsReddit } from "react-icons/bs";
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  return (
    <FormC>
      <BsReddit />
      <BolText>Reset your password</BolText>
      {success ? (
        <NorText>Check your email :)</NorText>
      ) : (
        <>
          <NorText>
            Enter the email associated with your account and we will send you a
            reset link
          </NorText>
          <Form onSubmit={onSubmit}>
            <input
              name="email"
              placeholder="email"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <ErrorText>
              {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </ErrorText>
            <Button type="submit" loading={sending}>
              {sending ? <RiLoader2Fill /> : "Reset Password"}
            </Button>
          </Form>
        </>
      )}
      <FlexRow gap="1rem">
        <ImpText
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "login" }))
          }
        >
          Log In
        </ImpText>
        <BsDot />
        <ImpText
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "signup" }))
          }
        >
          Sign Up
        </ImpText>
      </FlexRow>
    </FormC>
  );
};
export default ResetPassword;
