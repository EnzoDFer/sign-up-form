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

export const TitleBanner = styled.div`
  height: fit-content;
  width: 100%;
  background: rgb(0,0,0,0.4);
  position: absolute;
  top: 20%;
  padding: 1rem;
  font-size: 5rem;
  text-align: center;
  font-weight: bolder;
  color: rgb( 255,255,255,0.8);

`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.4fr 0.4fr 0.2fr;
  grid-template-columns: auto;
  background: rgb(189, 198, 198,0.4);
`;

export const Content = styled.div`
  background: transparent;
  padding: 2rem;
  font-size: 1.2rem;
  text-shadow: 0 0 1px black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;