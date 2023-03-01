import { Button } from "@/src/styles/GlobalStyles";
import {
  ButtonsContainer,
  ImageContainer,
  ImageUploadContainer,
} from "@/src/styles/Posts.styled";
import React, { useRef } from "react";

type ImageUploadProps = {
  onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFile?: string;
  SetSelectedTab: (value: string) => void;
  setSelectedFile: (value: string) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  onSelectImage,
  setSelectedFile,
  selectedFile,
  SetSelectedTab,
}) => {
  const selectedFileRef = useRef<HTMLInputElement>(null);
  return (
    <ImageUploadContainer>
      {selectedFile ? (
        <ImageContainer>
          <img src={selectedFile} />
          <ButtonsContainer>
            <Button onClick={() => SetSelectedTab("Post")}>Back to Post</Button>
            <Button outline={true} onClick={() => setSelectedFile("")}>
              Remove
            </Button>
          </ButtonsContainer>
        </ImageContainer>
      ) : (
        <>
          <Button
            outline={true}
            onClick={() => selectedFileRef.current?.click()}
          >
            Upload
          </Button>
          <input
            ref={selectedFileRef}
            type={"file"}
            hidden
            onChange={onSelectImage}
          />
        </>
      )}
    </ImageUploadContainer>
  );
};
export default ImageUpload;
