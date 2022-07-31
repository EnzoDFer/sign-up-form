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


const device = {
  desktop: 'screen (min-width: 768px)',
  tablet: 'screen (min-width: 425px),(max-width: 768px)',
  mobileL: 'screen (min-width: 375px),(max-width: 425px)',
  mobileM: 'screen (min-width: 320px),(max-width: 375px)',
  mobileS: 'screen (max-width: 375px)',
}

export const Legend = styled.legend`
  margin-bottom: ${font.medium};
  font-weight: bolder;
  font-size: ${font.xxlarge};
  margin-left: 2rem;
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
  height: 100px;
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
  width: 40%;
  top: calc(100% + 2rem);
  font-size: ${font.large}; 
  padding: ${font.large};
  margin-left: 1rem;
  min-width: fit-content;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); 
`;


export const Label = styled.label`
  box-sizing: border-box;
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
  height: 100px;
`;  

export const LabelHolder = styled.div`
  box-sizing: border-box;
  background: transparent;
  height: 100%;
  width: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  opacity: 1;
  transition: all 0.25s ease-in;
  ${Input}:focus + &&,
  ${Input}:not(:placeholder-shown) + && {
    ${labelHolderActivate};
  }
`;

export const Fieldset = styled.fieldset`
  all: unset;
  padding: ${font.small}; 
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

export const StyledForm = styled.form`
  position: relative;
  padding: 0.4rem;
  box-shadow: 0 0.5rem 1rem rgb(0,0,0,0.2);
  @media (min-width: 1024px) {
    padding: 1rem 8rem 1rem 2rem;
  }
`;