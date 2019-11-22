import React from "react";

import Carrousel from "./Carrousel";
import Livros from "./Livros";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Inicial() {
  return (
    <section>
      <Carrousel />
      <Livros />
    </section>
  );
}
