import Data from "../../data.json";
import { useState } from "react";
import styled from "styled-components";
import { Caption } from "../../components/caption";
import { Link } from "react-router-dom";
import {
  Commander,
  Specialist,
  Pilot,
  Engineer,
  BgCrewDesktop,
  BgCrewTablet,
  BgCrewMobile,
} from "../../assets";

const Crew = ({ indice }) => {
  const imgs = [Commander, Specialist, Pilot, Engineer];
  const [crewActive, setCrewActive] = useState(indice);
  const [info, setInfo] = useState({
    img: imgs[indice],
    name: Data.crew[indice].name,
    bio: Data.crew[indice].bio,
    role: Data.crew[indice].role,
    rota: Data.crew[indice].rota,
  });
  const changeImgs = (index) => {
    setCrewActive(index);
    setInfo({
      img: imgs[index],
      name: Data.crew[index].name,
      bio: Data.crew[index].bio,
      role: Data.crew[index].role,
      rota: Data.crew[index].rota,
    });
  };
  return (
    <Main>
      <Caption number="02" text="Meet your crew" />
      <Container>
        <DivTexts>
          <Role>{info.role}</Role>
          <NameCrew>{info.name}</NameCrew>
          <Description>{info.bio}</Description>
          <div>
            {Data.crew.map((crew, index) => {
              return (
                <Link
                  to={`/Crew/${crew.rota}`}
                  key={index}
                  className={
                    crewActive == index ? "link-crew active" : "link-crew"
                  }
                  onClick={() => changeImgs(index)}
                />
              );
            })}
          </div>
        </DivTexts>
        <Hr />
        <img src={info.img} alt="Foto do tripulante" />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  color: white;
  padding: 200px 165px 0;
  height: 100vh;
  background: url(${BgCrewDesktop}) no-repeat;
  background-size: cover;

  @media (max-width: 1200px) {
    padding: 200px 0 0 70px;
  }
  @media (max-width: 850px) {
    padding: 200px 40px 0;
    height: 100%;
    background: url(${BgCrewTablet}) no-repeat;
    background-size: cover;
  }
  @media (max-width: 500px) {
    text-align: center;
    padding: 100px 30px 60px;
    background: url(${BgCrewMobile}) no-repeat;
    background-size: cover;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 75%;
  align-items: center;
  img {
    height: 67vh;
  }
  @media (min-width: 1800px) {
    justify-content: space-around;
    gap:100px;
    img {
      scale:1.1;
      margin-top:150px;
    }
  }
  @media (min-width: 1500px) {
    img{
      scale: 0.9;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 60px;
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    margin-top: 40px;
    img {
      height: 45vh;
    }
  }
`;
const DivTexts = styled.div`
  width: 570px;
  @media (min-width: 1800px) {
    scale: 1.6;
  }
  .link-crew {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 8px;
    background-color: #454545;
    border-radius: 50%;
    transition: 0.4s;
  }
  .link-crew.active {
    background-color: white;
  }
  .link-crew:hover {
    background-color: #999999;
  }
  @media (max-width: 850px) {
    width: 100%;
    .link-crew {
      margin: 30px 8px 40px;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    :last-child {
      order: 1;
    }
  }
`;
const NameCrew = styled.h2`
  font-size: 56px;
  text-transform: uppercase;
  font-weight: 200;
  font-family: "Bellefair", serif;
  margin: 20px 0 30px;
  width: 150%;
  @media (max-width: 1024px) {
    width: 100%;
    font-size: 45px;
  }
  @media (max-width: 500px) {
    order: 3;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
const Role = styled.p`
  margin-top: 40px;
  font-size: 32px;
  text-transform: uppercase;
  color: #606060;
  font-family: "Bellefair", serif;
  @media (max-width: 500px) {
    order: 2;
    font-size: 18px;
    margin-top: 0;
  }
`;
const Description = styled.p`
  line-height: 30px;
  font-size: 18px;
  font-family: "Barlow";
  opacity: 0.8;
  width: 75%;
  margin-bottom: 40px;
  @media (max-width: 850px) {
    margin: auto;
  }
  @media (max-width: 500px) {
    order: 4;
    font-size: 15px;
    width: 100%;
  }
`;

const Hr = styled.hr`
  display: none;
  @media (max-width: 500px) {
    display: block;
    width: 100%;
    height: 1px;
    background-color: #606060;
    opacity: 0.3;
  }
`;

export { Crew };
