import { authModalState } from "@/src/atoms/authModalAtoms";
import { ModalC, ModalOverlay } from "@/src/styles/Modal.styled";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FiX } from "react-icons/fi";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import { NorText } from "@/src/styles/GlobalStyles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";
import ResetPassword from "./ResetPassword";
type AuthModalProps = { open: boolean; loading?: boolean };

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    setModalState((prev) => {
      return { ...prev, open: false };
    });
  };

  useEffect(() => {
    if (user) handleClose();
  }, [user]);

  return (
    <ModalOverlay open={modalState.open}>
      <ModalC>
        <FiX onClick={handleClose} />
        <h2>
          {modalState.view === "login" && "Login"}
          {modalState.view === "signup" && "Sign Up"}
          {modalState.view === "resetPassword" && "Reset Password"}
        </h2>
        {modalState.view === "login" || modalState.view === "signup" ? (
          <>
            <OAuthButtons />
            <NorText>OR</NorText>
            <AuthInputs />
          </>
        ) : (
          <ResetPassword />
        )}
      </ModalC>
    </ModalOverlay>
  );
};
export default AuthModal;
