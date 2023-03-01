import styled from "styled-components";
import {
  BolText,
  Button,
  FlexRow,
  LigText,
  LinkText,
  NorText,
  TitleBox,
} from "./GlobalStyles";
import { IconsBox } from "./Navbar.styled";

export const NotFoundC = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ComHeader = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  & ${FlexRow} {
    width: 100%;
    justify-content: start;
    padding: 0 4rem;
    gap: 1.2rem;
    max-width: 100rem;
    align-items: center;
    & > img,
    > svg {
      width: 8rem;
      height: 8rem;
      position: relative;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid ${({ theme }) => theme.color_tertiary};
      top: -1.5rem;
      color: ${({ theme }) => theme.color_secondary};
    }
    & ${Button} {
      font-size: 1.5rem;
      padding: 0.4rem 2rem;
      height: auto;
    }
  }
`;

export const BlueBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color_secondary};
`;
export const ComBackground = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.color_tertiary};
  display: flex;
  justify-content: center;
`;
export const ComName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 1rem;
  & ${BolText} {
    font-size: 3.5rem !important;
  }
  & ${LigText} {
    font-size: 1.4rem;
  }
`;

export const CreatePostC = styled.div`
  width: 100%;
  display: flex;
  height: 7rem;
  align-items: center;
  background: ${({ theme }) => theme.color_tertiary};
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem;
  gap: 1rem;
  & > input {
    flex: 1;
    height: 4.5rem;
  }
  & > svg {
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.color_text};
  }
  & ${IconsBox} {
    & > svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const SubmitPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100rem;
  margin: 0 auto;
  & ${TitleBox} {
    width: 100%;
    margin-left: 4rem;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color_tertiary};
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  overflow: hidden;
`;
export const AboutHeader = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color_secondary};
  color: ${({ theme }) => theme.color_tertiary};
  & ${NorText} {
    color: ${({ theme }) => theme.color_tertiary} !important;
  }
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  padding: 1rem;
  & > svg {
    font-size: 2rem;
  }
`;
export const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.5rem;
  width: 100%;
  & ${NorText} {
    font-size: 1.3rem !important;
  }
  & ${Button} {
    height: 3.5rem;
    width: 100%;
  }
`;
export const AboutInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;
export const AboutCreatedAt = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  & > svg {
    color: ${({ theme }) => theme.color_text};
    font-size: 2rem;
  }
`;

export const ChangeImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > ${LinkText} {
    cursor: pointer;
  }
  & > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
  & > svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.color_secondary};
  }
`;

export const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 0.3rem;
  overflow: hidden;
  align-items: center;
  background-color: ${({ theme }) => theme.color_tertiary};
  & > ${Button} {
    width: 90%;
    margin-bottom: 1rem;
  }
`;
export const RecommendationsHeader = styled.div`
  width: 100%;
  height: 7rem;
  position: relative;
  display: flex;
  align-items: end;
  border-radius: 0.3rem;
  overflow: hidden;
  padding: 0.5rem;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(145, 145, 145, 0) 100%
    );
    z-index: 3;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  & ${NorText} {
    color: ${({ theme }) => theme.color_tertiary};
    font-size: 1.7rem;
    font-weight: 400;
    position: relative;
    z-index: 4;
  }
`;
export const RecommendationsList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 0 0.5rem;
`;
export const RecommendationsItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  gap: 1rem;
  height: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.color_tertiary_dark};
  & ${Button} {
    padding: 0.5rem 1.3rem;
    height: fit-content;
  }
  & ${NorText} {
    font-weight: 500;
    margin-right: 1rem;
  }
`;
export const CommunityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 1;
  gap: 0.5rem;
  & > svg,
  > img {
    width: 3.5rem;
    height: 3.5rem;
    color: ${({ theme }) => theme.color_secondary};
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const PremiumContainer = styled.div`
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.color_tertiary};
  margin: 1rem 0;
  border-radius: 0.3rem;
  overflow: hidden;
  padding: 1rem;
  display: grid;
  column-gap: 1rem;
  row-gap: 0.3rem;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "icon title"
    "icon body"
    "button button";
  & > svg {
    grid-area: icon;
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.color_primary};
    justify-self: center;
    align-self: center;
  }
  & > ${BolText} {
    grid-area: title;
    align-self: center;
    font-size: 1.6rem !important;
  }
  & > ${NorText} {
    grid-area: body;
    font-size: 1.3rem;
  }
  & > ${Button} {
    background: ${({ theme }) => theme.color_primary};
    border: ${({ theme }) => theme.color_primary};
    width: 95%;
    grid-area: button;
    align-self: center;
    justify-self: center;
  }
`;

export const PersonalHomeContainer = styled.div`
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.color_tertiary};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.3rem;
  overflow: hidden;
  & > img {
    margin: 0 -1rem;
    margin-top: -1rem;
    height: 4rem;
    object-fit: cover;
  }
  & ${FlexRow} {
    justify-content: start;
    gap: 0.5rem;
    & > svg {
      width: 4rem;
      height: 4rem;
      color: ${({ theme }) => theme.color_primary};
    }
  }
  & ${BolText} {
    font-size: 1.8rem !important;
  }
  & ${NorText} {
    font-size: 1.4rem;
  }
  & ${Button} {
    width: 100%;
  }
`;
