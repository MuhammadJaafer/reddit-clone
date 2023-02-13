import { authModalState } from "@/src/atoms/authModalAtoms";
import { auth } from "@/src/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";
import { Button, ErrorText, ImpText, NorText } from "@/src/styles/GlobalStyles";
import { Form } from "@/src/styles/Modal.styled";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { RiLoader2Fill } from "react-icons/ri";
import { useSetRecoilState } from "recoil";
type LoginProps = { loading?: boolean };

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //firebase logic
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //update form state
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Form onSubmit={onSubmit}>
      <input
        name="email"
        placeholder="email"
        type="email"
        onChange={onChange}
        required
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
        required
      />
      <ErrorText>
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </ErrorText>
      <Button type="submit" loading={loading}>
        {loading ? <RiLoader2Fill /> : "Log In"}
      </Button>
      <div>
        <NorText>Forgot your password?</NorText>
        <ImpText
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "resetPassword" }))
          }
        >
          Reset
        </ImpText>
      </div>
      <div>
        <NorText>New here?</NorText>
        <ImpText
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "signup" }))
          }
        >
          Sign Up
        </ImpText>
      </div>
    </Form>
  );
};
export default Login;
