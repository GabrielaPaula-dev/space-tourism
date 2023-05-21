import styled from "styled-components";
import { BgHomeDesktop, BgHomeTablet, BgHomeMobile } from "../../assets";

const Home = () => {
  return (
    <Main>
      <div>
        <H4>So, you want to travel to</H4>
        <H1>Space</H1>
        <P>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </P>
      </div>
      <ButtonExplore>Explore</ButtonExplore>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 200px 165px 80px;
  background: url(${BgHomeDesktop});
  background-size: cover;

  @media (min-width: 1600px) {
    justify-content: space-around;
  }
  @media (max-width: 1400px) {
    gap: 100px;
    padding-left: 100px;
  }
  @media (max-width: 1024px) {
    padding: 120px 70px 40px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 200px 40px 50px;
    background: url(${BgHomeTablet}) no-repeat;
    background-size: cover;
    gap: 50px;
  }
  @media (max-width: 500px) {
    padding: 100px 40px 30px;
    background: url(${BgHomeMobile}) no-repeat;
    background-size: cover;
  }
`;
const H4 = styled.h4`
  font-family: "Barlow Condensed";
  font-weight: 200;
  font-size: 28px;
  letter-spacing: 4.72px;
  text-transform: uppercase;
  color: #ffffff;

  @media (min-width: 1600px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    letter-spacing: 2.5px;
  }
`;
const H1 = styled.h1`
  font-family: "Bellefair", serif;
  font-weight: 400;
  font-size: 150px;
  margin: 24px 0 30px;
  text-transform: uppercase;
  color: #ffffff;
  @media (min-width: 1600px) {
    font-size: 200px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
  @media (max-width: 500px) {
    font-size: 85px;
  }
`;
const P = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  width: 450px;
  line-height: 32px;
  color: #ffffff;
  font-weight: 200;
  @media (min-width: 1600px) {
    font-size: 30px;
    width: 600px;
    line-height: 45px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    width: 100%;
    margin: 40px 0;
  }
`;
const ButtonExplore = styled.button`
  padding: 110px 65px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 32px;
  font-family: "Bellefair", serif;
  text-transform: uppercase;
  background-color: #f0f0f0;
  transition: 2s;
  border: none;

  :hover {
    -webkit-box-shadow: 0px 0px 130px 26px rgba(176, 176, 176, 1);
    -moz-box-shadow: 0px 0px 130px 26px rgba(176, 176, 176, 1);
    box-shadow: 0px 0px 130px 26px rgba(176, 176, 176, 1);
  }
  @media (min-width: 1500px) {
    transform: scale(1.3);
  }
  @media (max-width: 1200px) {
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    padding: 80px 40px;
    font-size: 25px;
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

export { Home };
