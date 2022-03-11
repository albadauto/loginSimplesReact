import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const LoginForm = () => {

    const [login, setLogin] = useState({nome: '', senha: ''});
    const history = useHistory();
    const [result, setResult] = useState('');

  const handleSetLoginAndPass = function(){
    const loginSet = document.getElementById('nome').value
    const senhaSet = document.getElementById('senha').value

    if (loginSet && senhaSet){
      console.log("Setado com sucesso!: ", loginSet, ' ', senhaSet)
      setLogin({
        nome: loginSet,
        senha: senhaSet
      })
    }
  }

    const handleVerifyLogin = function(){
        let nome = document.getElementById('nome').value;
        let senha = document.getElementById('senha').value;
        if(login.nome == nome && login.senha == senha){
          history.push('/Main');
        }else{
            setResult('Não logado');
        }
      }
    return ( 
        <form action="" method="post">
            Nome:
            <input type="text" name="" id="nome" className='formBox'/>
            senha:
            <input type="password" name="" id="senha" className='formBox'/>
            <button type='button' onClick={handleVerifyLogin}>Logar</button>
            <button type='button' onClick={handleSetLoginAndPass}>Registrar</button>

            <h2>{result}</h2>

        </form>
    
    );
}
 
export default LoginForm;