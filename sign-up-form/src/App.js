import Form from './Components/Form';
import { BannerWrapper,Banner,Main,ContentWrapper,Content } from './App.styles';

function App() {
  return (
    <Main>
      <BannerWrapper>
          <Banner 
            backgroundImage={require('./images/Banner.png')}
          >
          </Banner>
      </BannerWrapper>
      <ContentWrapper>
        <Content></Content>
        <Form/>
        <Content></Content>
      </ContentWrapper>
    </Main>
  );
}

export default App;
