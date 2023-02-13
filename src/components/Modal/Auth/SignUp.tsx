import { authModalState } from "@/src/atoms/authModalAtoms";
import { auth } from "@/src/firebase/clientApp";
import { Button, ErrorText, ImpText, NorText } from "@/src/styles/GlobalStyles";
import { Form } from "@/src/styles/Modal.styled";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { RiLoader2Fill } from "react-icons/ri";
import { FirebaseError } from "firebase/app";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";
type SignUpProps = { loading?: boolean };

const SignUp: React.FC<SignUpProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  //firebase logic
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formError) setFormError("");
    //Password match
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //update form state
    setSignUpForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      <input
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        onChange={onChange}
        required
      />
      <ErrorText>
        {formError ||
          FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
      </ErrorText>
      <Button type="submit" loading={loading}>
        {loading ? <RiLoader2Fill /> : "Sign Up"}
      </Button>
      <div>
        <NorText>Already a redditor?</NorText>
        <ImpText
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "login" }))
          }
        >
          Log In
        </ImpText>
      </div>
    </Form>
  );
};
export default SignUp;
