import { useState,useEffect } from "react";
import { Input,InputWrapper,Label,LabelHolder,Fieldset,Legend,SubmitButton,StyledForm } from "./Form.styles";

const Form = ({...props}) => {
  const [passwordOne,setPasswordOne] = useState('1');
  const [passwordTwo,setPasswordTwo] = useState('2');

  const [disabled,setDisabled] = useState(true);

  useEffect(()=> {
    passwordOne===passwordTwo? 
    setDisabled(false):
    setDisabled(true)
  },[passwordOne,passwordTwo]);

  return (
    <StyledForm {...props}>
      <Legend>Sign up Now!</Legend>
      <Fieldset>
        <Form.TextInput id='firstName' label='First Name' />
        <Form.TextInput id='lastName' label='Last Name' />
        <Form.EmailInput id='email' label='Email' />
        <Form.PhoneInput id='phone' label='Phone #'/>
        <Form.PasswordInput id='password' label='Enter Password'
          onChange={(e)=>setPasswordOne(e.target.value)}
        /> 
        <Form.PasswordInput id='confirmPassword' label='Confirm Password'
          onChange={(e)=>setPasswordTwo(e.target.value)}
        /> 
      </Fieldset>
      <SubmitButton 
        type="submit" 
        value={disabled?'Please match passwords':'Create Account'}
        disabled={disabled}
      />
    </StyledForm>
  );
}

Form.PhoneInput = ({...props}) => <InputTemplate type='tel' placeholder=' ' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title='ex: ###-###-####' required {...props} />;

Form.EmailInput = ({...props}) => <InputTemplate type='email' placeholder=' ' required {...props} />;

Form.TextInput = ({...props}) => <InputTemplate type='text' placeholder=' ' required {...props} />;

Form.PasswordInput = ({...props}) => <InputTemplate type='password' placeholder=' ' {...props} required/>;

const InputTemplate = ({type,id,label,...props}) => {
  return (
    <InputWrapper>
      <Input type={type} id={id} {...props}  />
      <LabelHolder>
        <Label htmlFor={id}  isRequired>{label}</Label>
      </LabelHolder>
    </InputWrapper> 
  );
};

export default Form;