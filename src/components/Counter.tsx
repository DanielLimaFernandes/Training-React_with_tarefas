//usando useStates
// Um botão de incrementar
// Um botão de decrementar
// Um botão de zerar
// Exibição do valor atual do contador

import { useState } from "react";


const Counter = () => {
    const [contador, setContador] = useState(0);


    function incrementaContador(){
        setContador(contador + 1);
    }
    function decrementaContador(){
        setContador(contador - 1);
    }
    function zeraContador(){
        setContador(0)
    }


    return(
        <>
        <button onClick={incrementaContador}>soma contador</button>
        <button onClick={decrementaContador}>diminui contador</button>
        <button onClick={zeraContador}>zera contador</button>
        <h3>valor contador: {contador}</h3>
        </>
    )

};

export default Counter;

