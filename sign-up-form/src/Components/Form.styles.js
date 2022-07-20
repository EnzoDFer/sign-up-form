import styled, {css} from "styled-components";

const theme = {
  color:'#77d0d1'
};

const gradient = css`
  background-image: linear-gradient(
    90deg,
    hsl(240deg 100% 20%) 0%,
    hsl(306deg 100% 12%) 33%,
    hsl(11deg 100% 4%) 71%,
    hsl(352deg 97% 19%) 95%,
    hsl(332deg 94% 33%) 100%
  );
`;

const labelActivate = css`
  left: 15px;
  word-spacing: 100vw;
  font-weight: bold;
`;

const labelHolderActivate = css`
  opacity: 1;
  width: 80px;
`;

export const Label = styled.label`
  box-sizing: border-box;
  opacity: 0.5;
  position: absolute;
  top: 40px;
  left: 20%;
  transition: left 0.25s ease-out;
  z-index: -1;

  ${Input}:focus + &&,
  ${Input}:not(:placeholder-shown) + && {
    ${labelActivate};
  }
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 10px 0 0 20%;
  height: 100px;
  width: 100%;
  background: transparent;
  border: 4px solid  ${theme.color};
  border-radius: 8px; 
  transition: all 0.25s linear;

  &:focus {
    border: 6px solid  ${theme.color};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); 
  }
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 8px;
`;  

export const LabelHolder = styled.div`
  z-index: -2;
  box-sizing: border-box;
  position: absolute;
  background: ${theme.color};
  height: 100%;
  top: 0;
  width: 40px;
  border-radius: 8px;
  opacity: 0;
  transition: all 0.25s ease-in;

  ${Input}:focus + &&,
  ${Input}:not(:placeholder-shown) + && {
    ${labelHolderActivate};
  }
`;