import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const [titulo, setTitulo]=useState('')
  const [foto, setFoto]=useState('')
  const [descricao, setDescricao]=useState('')

  function onchangeTitulo (e){
setTitulo(e.target.value)
  }
  function onchangeFoto (e){
setFoto(e.target.value)
  }
  function onchangeDescricao (e){
setDescricao(e.target.value)
  }
  const postagem = {
    titulo: titulo,
    foto: foto,
    descricao: descricao
  }
  function enviarPostagem (){
props.setPostagens(postagem)
setTitulo('')
setFoto('')
setDescricao('')
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={onchangeTitulo} value={titulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={onchangeFoto} value={foto}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={onchangeDescricao} value={descricao}/>
        </StyledLabel>
        <SendButton onClick={enviarPostagem}>Enviar!</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
