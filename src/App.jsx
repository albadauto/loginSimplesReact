import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import "./App.css";
import api from "./Api.js"; //Importando a conexao
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [dados, setDados] = useState({});
  useEffect(() => {
    api.get("main").then((res) => { //Pegamos a conexao que criamos, usamos a função get para recuperar todo o json dessa rota, e pegamos tudo via promise
      setDados(res.data);
    });
  }, []); //Essa função toda, consome a API vindo de Api.js, da base url seta.


  return (
    <Router>
      <div className="container-main">
        <label htmlFor="">Olá {dados.nome} {dados.sobrenome}, Exemplo perfeito de API</label>
        <Route path="/" exact component={LoginForm} />
        <Route path="/Main" exact component={Main} />
      </div>
    </Router>
  );
};

export default App;
