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
  background: yellow;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.4fr 0.4fr 0.2fr;
  grid-template-columns: none;
`;

export const Content = styled.div`
  background: rgb(#333);
`;