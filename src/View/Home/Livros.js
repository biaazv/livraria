import React from "react";
import styled from "styled-components";

import livro1 from "./img/livro1.jpg";
import livro2 from "./img/livro2.jpg";
import livro3 from "./img/livro3.jpg";
import livro4 from "./img/livro4.jpg";
import livro5 from "./img/livro5.jpg";
import livro6 from "./img/livro6.jpg";

export default function Livros() {
  const livros = [
    {
      id: 1,
      title: "Quincas Borba",
      author: "Machado de Assis",
      price: "R$ 30,00",
      figure: livro1
    },
    {
      id: 2,
      title: "A Guerra do Fim do Mundo",
      author: "Mario Vargas Llosa",
      price: "R$ 40,00",
      figure: livro2
    },
    {
      id: 3,
      title: "Os Irmãoes Karamázov",
      author: "Fiódor Dostoviéski",
      price: "R$ 50,00",
      figure: livro3
    },
    {
      id: 4,
      title: "A Viagem de Théo",
      author: "Catherine Clement",
      price: "R$ 30,00",
      figure: livro4
    },
    {
      id: 5,
      title: "Madame Bovary",
      author: "Gustave Flaubery",
      price: "R$ 40,00",
      figure: livro5
    },
    {
      id: 6,
      title: "Triste Fim do Policarpo Quaresma",
      author: "Lima Barreto",
      price: "R$ 50,00",
      figure: livro6
    }
  ];

  return (
    <List>
      <List>
        <h1>Lançamentos</h1>
        <Ul>
          {livros.map(titulo => (
            <Li key={titulo.id}>
              <Img src={titulo.figure} />
              <Titulo>{titulo.title}</Titulo>
              <Autor>{titulo.author}</Autor>
              <Preco>{titulo.price}</Preco>{" "}
            </Li>
          ))}
        </Ul>
      </List>
    </List>
  );
}

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Titulo = styled.h1``;

const Autor = styled.h4``;

const Preco = styled.p``;
const Img = styled.img``;
