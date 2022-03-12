import React, { useState } from "react";
import Button from "./Button";
import Products from "./Products";
import api from "../Api.js";

import { useHistory } from "react-router-dom";

const Main = () => {

    const history = useHistory();

    const handleAddProducts = () => {
        try {
          const nome = document.getElementById('nome').value
          const sobrenome = document.getElementById('sobrenome').value
          const cpf = document.getElementById('cpf').value
          const alerta = document.getElementById('alerta')


          api.get(`/main/insert/${nome}/${sobrenome}/${cpf}`).then((res) => alerta.innerHTML = "Cadastrado");
        } catch (err) {
          console.log(err);
        }
      };

    const [produtos, setProdutos] = useState([
        {
          nome: "Arroz",
          preco: 99,
        },
        {
          nome: "Sei la",
          preco: 99,
        },
      ]);
  return (
    <>
      <br />
      Nome: <br />
      <input type="text" name="" id="nome" /><br />
      Sobrenome: <br />
      <input type="text" name="" id="sobrenome" /><br />
      Cpf: <br />
      <input type="text" name="" id="cpf" /><br />
    
      <label htmlFor="" id="alerta"></label><br />
      <Button onclick={handleAddProducts}>Adicionar</Button>
      <Products product={produtos} />
    </>
  );
};

export default Main;
