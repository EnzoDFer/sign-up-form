import { Input,InputWrapper,Label,LabelHolder,Fieldset,Legend,SubmitButton } from "./Form.styles";

const Form = () => {
  return (
    <form>
      <Legend>Sign up Now!</Legend>
      <Fieldset>
        <Form.TextInput id='firstName' label='First Name' />
        <Form.TextInput id='lastName' label='Last Name' />
        <Form.EmailInput id='email' label='Email' />
        <Form.PhoneInput id='phone' label='Phone #'/>
        <Form.PasswordInput id='password' label='Enter Password'/> 
        <Form.PasswordInput id='confirmPassword' label='Confirm Password'/> 
      </Fieldset>
      <SubmitButton type="submit" value="Create Account" />
    </form>
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
      <LabelHolder/>
      <Label htmlFor={id}  isRequired>{label}</Label>
    </InputWrapper> 
  );
};

export default Form;