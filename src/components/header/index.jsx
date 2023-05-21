import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Logo, MenuHamburguer, Close } from "../../assets";

const Header = () => {
  const pages = ["/", "Destination", "Crew", "Technology"];
  const subpages = ["", "Moon", "Commander", "Launch-Vehicle"];
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <TagHeader>
      <img src={Logo} alt="Logo" />
      <Hr />
      <Nav checked={isChecked}>
        <input
          type="checkbox"
          id="menu-hamburguer"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <label htmlFor="menu-hamburguer">
          <img
            src={isChecked ? Close : MenuHamburguer}
            alt="Ícone Menu Hamburguer"
          />
        </label>
        <div className="list-links">
          {pages.map((page, index) => {
            return (
              <NavLink
                to={page == "/" ? "/" : `/${page}/${subpages[index]}`}
                className={({ isActive }) =>
                  isActive ? "link-header active" : "link-header"
                }
                onClick={() =>
                  isChecked ? setIsChecked(false) : setIsChecked(true)
                }
              >
                <span>0{index}</span> {page == "/" ? "home" : page}
              </NavLink>
            );
          })}
        </div>
      </Nav>
    </TagHeader>
  );
};
const TagHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 0 50px;
  position: absolute;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0 0 0 34px;
    align-items: flex-start;

    img[alt="Logo"] {
      margin-top: 25px;
      width: 38px;
      height: 38px;
    }
  }
`;
const Nav = styled.nav`
  padding: 35px 0 0 120px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.04);
  width: 60%;

  .list-links {
    display: flex;
    gap: 60px;
  }

  .link-header {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 200;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: 0.5s ease-in-out;
    padding-bottom: 30px;
    border-bottom: 4px solid transparent;
  }

  .link-header span {
    font-weight: bold;
    margin-right: 7px;
  }

  .link-header.active {
    border-bottom-color: white;
  }
  .link-header:hover {
    border-bottom-color: #979797;
  }

  #menu-hamburguer,
  label {
    display: none;
  }
  @media (min-width: 1650px) {
    padding: 50px 0 0 120px;

    .link-header {
      font-size: 30px;
      padding-bottom:50px;
    }
  }

  @media (max-width: 1280px) {
    width: 72%;
    padding: 35px 0 0 50px;

    .link-header {
      font-size: 14px;
    }

    .list-links {
      gap: 30px;
    }

    .link-header span {
      font-weight: bold;
      margin-right: 0;
      font-size: 12px;
    }
  }
  @media (max-width: 800px) {
.link-header{
  text-align: center;
}
  }
  @media (max-width: 600px) {
    background-color: transparent;
    backdrop-filter: none;
    transition: width 2s ease-in;
    .link-header:hover {
      border-bottom-color: none;
    }
    label {
      display: block;
      padding-bottom: 30px;
      margin-left: auto;
      width: 30%;
    }

    .list-links {
      display: none;
    }
    .link-header {
      padding-bottom: 5px;
      margin-bottom: 30px;
      width: 70%;
      text-align: left;
    }

    #menu-hamburguer:checked ~ .list-links {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    ${(props) =>
      props.checked === true &&
      css`
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.04);
        height: 100%;
        position: fixed;
        z-index: 5;
        right: 0;
        animation: openMenu 1s;
        @keyframes openMenu {
          0% {
            width: 0;
          }
          100% {
            width: 70%;
          }
        }
        label {
          width: 25%;
          margin-bottom: 30px;
        }
      `}
  }
`;
const Hr = styled.hr`
  width: 34%;
  position: absolute;
  left: 165px;
  z-index: 2;
  opacity: 0.3;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export { Header };
