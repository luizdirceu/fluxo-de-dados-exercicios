import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  
  const [pageFlow, setPageFlow] = useState(1);
  const [login, setLogin]=useState({
    nome:"",
    foto:""
  }
  )
 
  const [postagens, setPostagens]=useState({titulo:"", 
  foto:"", 
  descricao:""})
  return (
    <>
      <GlobalStyle />
      
      <Container>
        <aside>
          <Header login={login}/>
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} setLogin={setLogin}/>
          ) : (
            <FormularioPostagem setPostagens={setPostagens}/>
          )}
        </aside>
        <TelaDaPostagem postagens={postagens}/>
      </Container>
    </>
  );
}

export default App;
