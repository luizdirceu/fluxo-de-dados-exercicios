import React, { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const [nome, setNome]=useState('')
  const [foto, setFoto]=useState('')
function onchangeNome (e){
 setNome (e.target.value)
}
function onchangeFoto (e){
 setFoto (e.target.value)
}

  const login = () => {
    const usuario ={
      nome: nome,
      foto: foto
    }
    props.setLogin(usuario)
    props.setPageFlow(2);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={onchangeNome} value={nome}/>
        </StyledLabel>
        <StyledLabel >
          Foto de Perfil
          <Input type={"text"} onChange={onchangeFoto} value={foto}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
