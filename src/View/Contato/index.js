import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Section>
      <Form>
        <h1>Formulário de cadastro</h1>
        <input type="text" name="nome" placeholder="Nome" />

        <input type="email" name="email" placeholder="E-mail" />

        <textarea name="comentarios" placeholder="Comentários" />
        <input type="submit" name="enviar" value="Enviar" />
        <input type="reset" name="reset" value="apagar" />
      </Form>
    </Section>
  );
}

const Section = styled.section``;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  margin: 0 auto;
  justify-content: space-between;
`;
