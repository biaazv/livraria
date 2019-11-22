import React from "react";
import { Route, Switch } from "react-router-dom";

import Contato from "../View/Contato";
import Dicas from "../View/Dicas/Dicas";
import Recomendados from "../View/Recomendados/Recomendados";
import Sobre from "../View/Sobre/Sobre";
import Vendidos from "../View/Vendidos/Vendidos";
import index from "../View/Home/";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={index} />
      <Route exact path="/Dicas" component={Dicas} />
      <Route exact path="/Sobre" component={Sobre} />
      <Route exact path="/Contato" component={Contato} />
      <Route exact path="/Vendidos" component={Vendidos} />
      <Route exact path="/Recomendados" component={Recomendados} />
    </Switch>
  );
}
