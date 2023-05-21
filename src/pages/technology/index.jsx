import Data from "../../data.json";
import { useState } from "react";
import styled from "styled-components";
import { Caption } from "../../components/caption";
import {
  VehicleDesktop,
  VehicleMobile,
  SpaceportDesktop,
  SpaceportMobile,
  SpaceCapsuleDesktop,
  SpaceCapsuleMobile,
  BgTechnologyDesktop,
  BgTechnologyTablet,
  BgTechnologyMobile,
} from "../../assets";
import { Link } from "react-router-dom";

const Technology = ({ indice }) => {
  const technologyDesktop = [
    VehicleDesktop,
    SpaceCapsuleDesktop,
    SpaceportDesktop,
  ];
  const technologyMobile = [VehicleMobile, SpaceCapsuleMobile, SpaceportMobile];
  const [tecnologyActive, setTechnologyActive] = useState(indice);
  const [info, setInfo] = useState({
    img: {
      desktop: technologyDesktop[indice],
      mobile: technologyMobile[indice],
    },
    name: Data.technology[indice].name,
    description: Data.technology[indice].description,
    rota: Data.technology[indice].rota,
  });

  const changeTechnology = (index) => {
    setTechnologyActive(index);
    setInfo({
      img: {
        desktop: technologyDesktop[index],
        mobile: technologyMobile[index],
      },
      name: Data.technology[index].name,
      description: Data.technology[index].description,
      rota: Data.technology[index].rota,
    });
  };

  return (
    <Main>
      <Caption number="03" text="space launch 101" />
      <Container>
        <Div>
          {Data.technology.map((technology, index) => {
            return (
              <Button key={index}>
                <Link
                  to={`/Technology/${technology.rota}`}
                  key={index}
                  onClick={() => changeTechnology(index)}
                  className={
                    tecnologyActive == index
                      ? "link-technology active"
                      : "link-technology"
                  }
                >
                  {index + 1}
                </Link>
              </Button>
            );
          })}
        </Div>
        <DivTexts>
          <P>the terminology...</P>
          <Name>{info.name}</Name>
          <Description>{info.description}</Description>
        </DivTexts>
        <picture style={{ marginLeft: "auto" }}>
          <source srcSet={info.img.mobile} media="(max-width:950px)" />
          <img src={info.img.desktop} alt="Foto da tecnologia usada" />
        </picture>
      </Container>
    </Main>
  );
};

const Main = styled.main`
  color: white;
  padding: 200px 0 0 165px;
  height: 100vh;
  background: url(${BgTechnologyDesktop}) no-repeat;
  background-size: cover;

  @media (max-width: 1200px) {
    padding: 200px 0 0 70px;
  }
  @media (max-width: 950px) {
    padding: 180px 0 60px 0;
    height: 100%;
    background: url(${BgTechnologyTablet}) no-repeat;
    background-size: cover;
  }
  @media (max-width: 500px) {
    padding: 100px 0 60px 0;
    text-align: center;
    min-height: 100%;
    background: url(${BgTechnologyMobile}) no-repeat;
    background-size: cover;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  margin-top: 50px;
  img {
    height: 45vh;
  }
  @media (min-width: 1700px) {
    margin-top: 200px;
    img {
      height: 50vh;
    }
  }
  @media (min-width: 1600px) {
    justify-content: space-around;
  }
  @media (max-width: 1200px) {
img{
  height: 45vh;
}  }
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 20px;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
    }
  }
`;
const DivTexts = styled.div`
  width: 445px;
  margin-bottom: 15px;
  @media (min-width: 1700px) {
    scale: 1.5;
    margin-left: 140px;
  }
  @media (max-width: 1100px) {
  }
  @media (max-width: 950px) {
    order: 2;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1700px) {
    scale: 1.5;
  }
  @media (max-width: 950px) {
    flex-direction: row;
    gap: 30px;
    order: 1;
    margin-top: 450px;
  }
  @media (max-width: 768px) {
    margin-top: 300px;
  }
  @media (max-width: 500px) {
    margin-top: 190px;
  }
  @media (max-width: 320px) {
    margin-top: 150px;
  }
`;
const Button = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  margin-bottom: 45px;
  font-family: "Bellefair", serif;
  border: 1px solid #606060;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  cursor: pointer;

  :hover {
    border: 1px solid white;
  }
  .link-technology {
    width: 70px;
    height: 70px;
    display: inline-block;
    color: white;
    border-radius: 70px;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link-technology.active {
    color: #000;
    background-color: #fff;
    border: none;
  }
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
    margin-bottom: 25px;
    .link-technology {
      width: 50px;
      height: 50px;
      font-size: 20px;
    }
  }
`;
const P = styled.p`
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2.7px;
  opacity: 0.9;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
const Name = styled.h2`
  font-size: 56px;
  text-transform: uppercase;
  font-weight: 200;
  font-family: "Bellefair", serif;
  margin: 15px 0 20px;
  width: 150%;
  @media (max-width: 1100px) {
    font-size: 35px;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;
const Description = styled.p`
  line-height: 30px;
  font-size: 18px;
  font-family: "Barlow";
  opacity: 0.8;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    width: 80%;
    margin: auto;
    line-height: 25px;
    padding-bottom: 100px;
  }
`;

export { Technology };
