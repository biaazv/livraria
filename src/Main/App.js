import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Cabecalho from "./Cabecalho";
import Routes from "./Routes";
import Rodape from "./Rodape";

export default function App() {
  return (
    <BrowserRouter>
      <Corpo>
        <Cabecalho />
        <Routes />
        <Rodape />
      </Corpo>
    </BrowserRouter>
  );
}

const Corpo = styled.body`
  height: 600px;
`;
