import { Input,InputWrapper, Label, LabelHolder } from "./Form.styles";
import styled, {css} from "styled-components";

const Form = () => {
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

  const Formdiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 15px;
    gap: 10px 0px;
    background-image: ${gradient};
  `;

  //remove above when ready
  return (
    <Formdiv>
      <Form.EmailInput id='email' label='Email' />
      <Form.TextInput id='Name' label='First Name' />
      <Form.PhoneInput id='phone' label='Phone #:'/>
    </Formdiv>
  );
}

Form.PhoneInput = ({...props}) => <InputTemplate type='tel' placeholder=' ' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title='ex: ###-###-####' {...props} />;

Form.EmailInput = ({...props}) => <InputTemplate type='email' placeholder=' ' Required {...props} />;

Form.TextInput = ({...props}) => <InputTemplate type='text' placeholder=' ' {...props} />;

const InputTemplate = ({type,id,label,...props}) => {
  return (
    <InputWrapper>
      <Input type={type} id={id} {...props}  />
      <LabelHolder/>
      <Label HTMLfor={id}  isRequired>{label}</Label>
    </InputWrapper> 
  );
};

export default Form;