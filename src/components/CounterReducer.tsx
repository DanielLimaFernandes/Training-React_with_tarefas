import { act, useReducer } from "react";

type Contador = {
    valor: number;
}

type AcaoContador = {
    tipo: string;
}

function reducerCounter(estado: Contador, action:  AcaoContador) {
    if(action.tipo === "incrementar"){
        return{
            valor: estado.valor + 1,
        };
    }
    if(action.tipo === "decrementar"){
        return{
            valor: estado.valor - 1,
        };
    }
    if(action.tipo === "zerar"){
        return{
            valor: 0,
        };
    }

    throw new Error("algo inesperado aconteceu")
}

const CounterReducer = () => {
    const [contador, dispatch] = useReducer(reducerCounter, {valor: 0});


    return(
        <div>
            <h2>Contador:</h2>
            <p>{contador.valor}</p>
            <p>
                <button onClick={() => dispatch({tipo: 'incrementar'})}> incrementar contador</button>
                <button onClick={() => dispatch({tipo: 'decrementar'})}> decrementador contador</button>
                <button onClick={() => dispatch({tipo: 'zerar'})}> zerar contador</button>
            </p>
        </div>
    )
}


export default CounterReducer;