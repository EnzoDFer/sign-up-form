import styled, {css} from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  height: 100%;
  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: none;
  }
`;

export const BannerWrapper = styled.div`
  background: rgba(119, 208, 209, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Banner = styled.div`
  position: relative;
  height: 50%;
  min-height: 500px;
  min-width: 300px;
  width: 50%;
  background-image: url("${props=>props.backgroundImage}");
  background-repeat: no-repeat;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.4fr 0.4fr 0.2fr;
  grid-template-columns: none;
  background: rgb(189, 198, 198,0.4);
  
`;

export const Content = styled.div`
  background: transparent;
`;