import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <Cabeca>
      <Titulo>
        <Navigation to="/">Livraria Dom Casmurro </Navigation>
      </Titulo>

      <Navigation to="/Sobre">SOBRE</Navigation>
      <Navigation to="/Dicas">DICAS</Navigation>
      <Navigation to="/Vendidos">VENDIDOS </Navigation>
      <Navigation to="/Recomendados">RECOMENDADOS </Navigation>
      <Navigation to="/Contato">CONTATO </Navigation>
    </Cabeca>
  );
}

const Cabeca = styled.header`
  display: flex;
  background: #ccc;
  font-size: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Navigation = styled(Link)`
  margin: 10px;
  text-decoration: none;
`;

const Titulo = styled.h1`
  font-size: 1.5rem;
  text-decoration: none;
`;
