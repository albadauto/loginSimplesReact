import React, { useState } from 'react';
import Button from './Button';
import Products from './Products';

const Main = () => {
    const obj = {
        nome: 'Jose',
        idade: 20
    }

    const { nome, idade } = obj //Exemplo de destructuring
    const [produtos, setProdutos] = useState([
        {
            nome: 'Arroz',
            preco: 99
        },
        {
            nome: 'Sei la',
            preco: 99
        }
    ])
    const handleAddProducts = () => {
        
    }
    
    return ( 
        <>
        <label htmlFor="">{`meu nome é ${nome}, tenho ${idade} anos`}</label><br />
            <Button onclick={handleAddProducts}>Adicionar</Button>
            <Products product={produtos}/>
        
        </>
     );
}
 
export default Main;