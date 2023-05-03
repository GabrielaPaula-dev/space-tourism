import Data from "../../data.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Caption } from "../../components/caption";
import {
  Moon,
  Mars,
  Europa,
  Titan,
  BgDestinationDesktop,
  BgDestinationTablet,
  BgDestinationMobile,
} from "../../assets";

const Destination = ({ indice }) => {
  const Stars = [Moon, Mars, Europa, Titan];
  const [starActive, setStarActive] = useState(indice);
  const [info, setInfo] = useState({
    img: Stars[indice],
    name: Data.destinations[indice].name,
    description: Data.destinations[indice].description,
    distance: Data.destinations[indice].distance,
    travel: Data.destinations[indice].travel,
  });
  const changeStars = (index) => {
    setStarActive(index);
    setInfo({
      img: Stars[index],
      name: Data.destinations[index].name,
      description: Data.destinations[index].description,
      distance: Data.destinations[index].distance,
      travel: Data.destinations[index].travel,
    });
  };
  return (
    <Main>
      <Caption number="01" text="Pick your destination" />
      <Container>
        <img src={info.img} alt="Imagem do Astro" />
        <DivTexts>
          <nav>
            {Data.destinations.map((Destination, index) => {
              return (
                <Link
                  to={`/Destination/${Destination.name}`}
                  className={
                    starActive == index ? "link-star active" : "link-star"
                  }
                  key={index}
                  onClick={() => changeStars(index)}
                >
                  {Destination.name}
                </Link>
              );
            })}
          </nav>
          <NameStar>{info.name}</NameStar>
          <Description>{info.description}</Description>
          <hr style={{ opacity: "0.3" }} />
          <Ul>
            <li>
              <p>Avg. Distan</p>
              <p>{info.distance}</p>
            </li>
            <li>
              <p>Est. travel time</p>
              <p>{info.travel}</p>
            </li>
          </Ul>
        </DivTexts>
      </Container>
    </Main>
  );
};

const Main = styled.main`
  color: white;
  padding: 160px 165px 0;
  height: 100vh;
  background: url(${BgDestinationDesktop}) no-repeat ;
  background-size: cover;
  @media (max-width: 1024px) {
    padding: 160px 60px 0;
  }
  @media (max-width: 768px) {
    padding: 160px 70px 50px;
    height: 100%;
    background: url(${BgDestinationTablet}) no-repeat;
    background-size: cover;
  }
  @media (max-width: 500px) {
    padding: 100px 50px 50px;
    text-align: center;
    background: url(${BgDestinationMobile}) no-repeat;
    background-size: cover;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 10px 0;
  img {
    width: 35%;
    margin-top: 20px;
  }
  @media (min-width: 1600px) {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 50px;
    padding: 40px 10px 0;

    img {
      width: 60%;
      margin-top: 40px;
    }
    @media (max-width: 500px) {
      padding: 0;
    }
  }
`;
const DivTexts = styled.div`
  width: 445px;
  @media (max-width: 768px) {
    width: 100%;
  }
  .link-star {
    color: white;
    padding-bottom: 7px;
    margin: 0 15px;
    text-transform: uppercase;
    font-family: "Barlow Condensed";
    letter-spacing: 4.72px;
    font-weight: 200;
  }
  .link-star.active {
    border-bottom: 3px solid white;
  }

  .link-star:hover {
    border-bottom: 3px solid #858585;
    color: #d2d2d2;
  }

  @media (max-width: 500px) {
    .link-star {
      font-size: 12px;
      margin-left: auto;
    }
  }
`;

const NameStar = styled.h2`
  font-size: 100px;
  font-family: "Bellefair", serif;
  text-transform: uppercase;
  font-weight: lighter;
  margin: 40px 0 20px;
  @media (max-width: 500px) {
    font-size: 56px;
  }
`;
const Description = styled.p`
  line-height: 30px;
  font-size: 18px;
  font-family: "Barlow";
  opacity: 0.8;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 100px;
  margin-top: 20px;

  li :first-child {
    font-family: "Barlow Condensed";
    font-size: 14px;
    letter-spacing: 2.36px;
    opacity: 0.8;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  li :last-child {
    font-size: 28px;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 50px;
  }
`;

export { Destination };
