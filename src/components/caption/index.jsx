import styled, { css } from "styled-components";

const Caption = ({ number, text }) => {
  return (
    <P>
      <span>{number}</span>
      {text}
    </P>
  );
};
const P = styled.p`
  font-size: 28px;
  font-family: "Barlow Condensed";
  font-weight: 200;
  letter-spacing: 4.72px;
  text-transform: uppercase;
  span {
    color: #606060;
    font-weight: bold;
    margin-right: 25px;
    font-size: 26px;
  }
  
  @media (max-width: 500px) {
    font-size: 16px;
    letter-spacing: 2.5px;
    span {
      font-size: 16px;
    }
    ${props => props.number==="03" && css`
    margin-left: 50px;
    `}
  }
`;

export { Caption };
