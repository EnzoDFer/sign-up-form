import styled, {css} from "styled-components";

const theme = {
  color:'#77d0d1'
};

const setFont = (size) => css`${(size/16)*1}rem`;

const font = {
  xxlarge: setFont(36),
  xlarge: setFont(24),
  large: setFont(18),
  medium: setFont(16),
  small: setFont(14),
}


export const Legend = styled.legend`
  margin-bottom: ${font.medium};
  font-weight: bolder;
  font-size: ${font.xxlarge};
  margin-left: 2rem;
  display: block;
  background: ${theme.color};
  width: fit-content;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgb(0,0,0,0.2);
`;

const labelHolderActivate = css`
  background: ${theme.color};
  width: 25%;
  font-weight: bolder;
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  padding-left: 25%;
  height: 2.5rem;
  @media (min-width: 2000px) {
    height: 5rem;
  }
  width: 100%;
  position: absolute;
  z-index: 2;
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
  width: 35%;
  height:15%;
  @media (max-width: 350px) {
    height:20%;
  }
  top: calc(100% + 2rem);
  font-size: ${font.xlarge}; 
  padding: ${font.xlarge};
  margin-left: 1rem;
  margin-right: 1rem;
  min-width: fit-content;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  ${props=>(props.disabled?
    css`
      border: 5px solid #BF3F3F;
      color: #BF3F3F;
    `:''
  )};
`;


export const Label = styled.label`
  opacity: 0.5;
  transition: left 0.25s ease-out;
  max-width: min-content;
  z-index: 2;
  text-shadow: 0 0 1px rgb(0,0,0,0.5);
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
  height: 2.5rem;
  @media (min-width: 2000px) {
    height: 5rem;
  }
`;  

export const LabelHolder = styled.div`
  background: transparent;
  height: 100%;
  width: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;
  opacity: 1;
  transition: all 0.25s ease-in;
  ${Input}:focus + &&,
  ${Input}:not(:placeholder-shown) + && {
    ${labelHolderActivate};
  }
`;

export const Fieldset = styled.fieldset`
  box-sizing: border-box;
  all: unset;
  padding: ${font.small}; 
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(3, 1fr); 
  gap: 0 4rem; 
  height: 70%;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-direction: space-between;
    gap: 1rem;
  }
`;

export const StyledForm = styled.form`
  box-sizing: border-box;
  background: transparent;
  position: relative;
  padding: 0.4rem;
  box-shadow: 0.5rem 0.5rem 1rem rgb(0,0,0,0.2);
  @media (min-width: 1024px) {
    padding: 1rem 8rem 1rem 2rem;
  }
`;