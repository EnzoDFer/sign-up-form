import Form from './Components/Form';
import { BannerWrapper,Banner, TitleBanner,Main,ContentWrapper,Content } from './App.styles';

function App() {
  return (
    <Main>
      <BannerWrapper>
          <Banner 
            backgroundImage={require('./images/Banner.png')}
          >
          </Banner>
          <TitleBanner>Real Service</TitleBanner>
      </BannerWrapper>
      <ContentWrapper>
        <Content>
          <h1>HEY YOU!</h1>
          <div>Yeah you! Don't you want to sign up below for my 100% not real service that
            was created as part of the <a href='https://www.theodinproject.com/'>Odin Project course.</a>
          </div>
        </Content>
        <Form/>
        <Content></Content>
      </ContentWrapper>
    </Main>
  );
}

export default App;
