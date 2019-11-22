import React from "react";
import styled from "styled-components";

import Baner from "./img/banner-livros.png";

export default function Home() {
  return (
    <Figure>
      <Section>
        <img src={Baner} alt="Baner" width="890" height="500" />
      </Section>
    </Figure>
  );
}

const Figure = styled.figure`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  margin: 10px;
  width: 890px;
  height: 500px;
  border: 3px solid blue;
  display: flex;
  flex-wrap: wrap;
`;
