import { Button, TextAreaInput, TextInput } from "@/src/styles/GlobalStyles";
import { TextInputsContainer } from "@/src/styles/Posts.styled";
import React from "react";
import { RiLoader2Fill } from "react-icons/ri";

type TextInputsProps = {
  textInputs: {
    title: string;
    body: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreatePost: () => void;
  loading: boolean;
};

const TextInputs: React.FC<TextInputsProps> = ({
  textInputs,
  onChange,
  handleCreatePost,
  loading,
}) => {
  return (
    <TextInputsContainer>
      <TextInput
        type={"text"}
        name="title"
        placeholder="Title"
        onChange={onChange}
        value={textInputs.title}
      />
      <TextAreaInput
        rows={10}
        name="body"
        placeholder="Text (optional)"
        onChange={onChange}
        value={textInputs.body}
      />
      <Button
        disabled={!textInputs.title}
        loading={loading}
        onClick={() => {
          handleCreatePost();
        }}
      >
        {loading ? <RiLoader2Fill /> : "Post"}
      </Button>
    </TextInputsContainer>
  );
};
export default TextInputs;
