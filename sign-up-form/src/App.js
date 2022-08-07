import Form from './Components/Form';
import { BannerWrapper,Main,ContentWrapper,Content } from './App.styles';

function App() {
  return (
    <Main>
      <BannerWrapper/>
      <ContentWrapper>
        <Content></Content>
        <Form/>
        <Content></Content>
      </ContentWrapper>
    </Main>
  );
}

export default App;
