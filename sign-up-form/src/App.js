import Form from './Components/Form';
import { BannerWrapper,Main,ContentWrapper,Content } from './App.styles';
import {ReactComponent as LogoHolder} from './Components/LogoHolder.svg';
import {ReactComponent as LogoHead} from './Components/head.svg';
import {ReactComponent as LogoHair} from './Components/hair.svg';
import {ReactComponent as Logo} from './logo.svg';

function App() {
  return (
    <Main>
      <BannerWrapper>
        <div>
          <LogoHolder/>
        </div>
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
