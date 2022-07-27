import styled, {css} from "styled-components";

const theme = {
  color:'#77d0d1'
};

const gradient = css`
  linear-gradient(
    90deg,
    hsl(240deg 100% 20%) 0%,
    hsl(306deg 100% 12%) 33%,
    hsl(11deg 100% 4%) 71%,
    hsl(352deg 97% 19%) 95%,
    hsl(332deg 94% 33%) 100%
  );
`;

export const Legend = styled.legend`
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: 2rem;
`;

const labelActivate = css`
  left: 5%;
  word-spacing: 100vw;
  font-weight: bold;
  font-size: 16px;
`;

const labelHolderActivate = css`
  opacity: 1;
  width: 25%;
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  padding-left: 25%;
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

export const SubmitButton = styled(Input)`
  background: ${theme.color};
  text-align: center;
  padding: 0px;
  width: 20%;
  margin: 16px 8px 8px 8px;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); 
`;


export const Label = styled.label`
  box-sizing: border-box;
  opacity: 0.5;
  position: absolute;
  top: 40px;
  left: 20%;
  transition: left 0.25s ease-out;
  z-index: -1;

  ${Input}:focus ~ &&,
  ${Input}:not(:placeholder-shown) ~ && {
    ${labelActivate};
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

export const Fieldset = styled.fieldset`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(3, 1fr); 
  gap: 10px 40px; 

  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: none;
  }
`;