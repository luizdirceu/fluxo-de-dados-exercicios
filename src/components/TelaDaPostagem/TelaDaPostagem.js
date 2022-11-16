import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({postagens}) => {

  return (
    (postagens.titulo && postagens.foto ?
<ContainerPostagem>
      <TitleHeader>{postagens.titulo}</TitleHeader>
      <Image src={postagens.foto} />
      <Description>{postagens.descricao}</Description>
    </ContainerPostagem>
:
    <ContainerPostagem>
      <TitleHeader>Um titulo</TitleHeader>
      <Image src={"https://picsum.photos/536/354"} />
      <Description>Uma descrição</Description>
    </ContainerPostagem>)
  );
};

export default TelaDaPostagem;
