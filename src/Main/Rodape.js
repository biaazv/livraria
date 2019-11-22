import React from "react";
import styled from "styled-components";

export default function Rodape() {
  return (
    <Rod>
      <ul>
        <h1>Livros</h1>
        <li>Livros de Artes</li>
        <li>Livros de Ciências</li>
        <li>Livros Didáticos </li>
        <li>Livros Humanidades </li>
        <li>Livros de Literatura e Ficção</li>
        <li>Livros de Idiomas e Referência </li>
      </ul>

      <ul>
        <h1>DVDs e Blu-Rays</h1>
        <li>Filmes</li>
        <li>Infantil</li>
        <li>Séries </li>
        <li>Documentários </li>
        <li>Lançamentos de DVDs</li>
        <li>Shows e Apresentações </li>
      </ul>

      <ul>
        <h1>Pesquise</h1>
        <li>Eventos</li>
        <li>Doe Livros</li>
        <li>BiBliotecas</li>
        <li>Livros em Ofertas </li>
        <li>Os Grandes Autores</li>
        <li>Autores Mais Vendidos </li>
      </ul>
    </Rod>
  );
}

const Rod = styled.footer`
  background: #c9f;
  display: flex;
  flex-wrap: wrap;
`;
