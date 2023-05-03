import { AppRouts } from "./pages/routes";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouts />
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style: none;
  }
`;
export default App;
