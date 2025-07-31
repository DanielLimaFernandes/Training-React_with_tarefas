import { useReducer, type ActionDispatch } from "react";
import { useState } from "react";
import './tarefasReducer.css'
import { createContext } from "react";



type Tarefa = {
    titulo: string;
    informacao: string;
    estado: string;
}


function ativoFuncao(valor: boolean) {
    if (valor === false)
        return (
            <>
                ativo
            </>
        );
    else (valor === true)
    return (
        <>
            concluido
        </>
    );
}

// export const TarefasContext = createContext<Tarefa[]>([]);

type acaoTarefa = ({ tipo: "adicionar"; payload: Tarefa } | { tipo: "limpar" } | { tipo: "remover"; payload: number } | { tipo: "concluida"; payload: number })

function reducerTarefas(estado: Tarefa[], action: acaoTarefa): Tarefa[] {

    if (action)

        if (action.tipo === "adicionar") {

            return (
                [...estado, action.payload]
            );
        }
    if (action.tipo === "limpar") {
        return [];
    }
    if (action.tipo === "remover") {
        return estado.filter((_, indiceTarefaRemover) => indiceTarefaRemover !== action.payload)
    }
    if (action.tipo === "concluida") {
        return estado.map((tarefa, i) =>
            i === action.payload ? { ...tarefa, estado: "concluido" } : tarefa
        );
    }
    else { return estado; }


}





const TarefasReducer = () => {

    const [Titulo, setTitulo] = useState("Titulo para exemplo");
    const [Informacao, setInformacao] = useState("exemplo de informação");
    const [tarefas, dispatch] = useReducer(reducerTarefas, [])
    const [Estado, setEstado] = useState<string>("ativo")
    const [local, setLocal] = useState(0);




    function adicionarUmaTarefa(e: React.FormEvent) {
        e.preventDefault();


        const novaTarefa: Tarefa = {
            titulo: Titulo,
            informacao: Informacao,
            estado: Estado
        };
        dispatch({ tipo: "adicionar", payload: novaTarefa });

        setTitulo("Titulo para exemplo");
        setInformacao("exemplo de informação");
        setEstado("ativo");
    }


    function estadoAtivo() {
        return ("ativo")
    }


    function ativoFuncao(estado: string) {
  return <>{estado === "ativo" ? "Ativa" : "Concluída"}</>;
}

    function removerTarefa(valor: number) {
        dispatch({ tipo: "remover", payload: valor })
    }


    function apagarTitulo(){
        setTitulo("");
    }
    function apagarInf(){
        setInformacao("");
    }

    function limparTarefas(){
        const index = local;
        dispatch({tipo: "remover", payload: index})
    }


    return (
        <div>
            <h3>formulario criando tarefa</h3>
            <form className="form" action="" onSubmit={adicionarUmaTarefa}>
                <div>
                    <label htmlFor="titulo">
                        titulo:
                    </label>
                    <input className="titulo" name="titulo" id="titulo" value={Titulo} onChange={(e) => setTitulo(e.target.value)}  onClick={apagarTitulo} />   
                </div>
                <div>
                    <label htmlFor="inf">
                        infomação:
                    </label>
                    <input type="text" className="inf" id="inf" name="inf" value={Informacao} onChange={(e) => setInformacao(e.target.value)} onClick={apagarInf} />
                </div>
                <div>
                    <label htmlFor="estado">escolha um estado da tarefa</label>

                    <select
                        id="estado"
                        value={Estado}
                        onChange={(e) => setEstado(e.target.value)}>

                        <option value="ativo">Ativa</option>
                        <option value="concluido">Concluída</option>

                    </select>
                    <button type="submit">Adicionar Tarefa</button>
                </div>
            </form>

            <div className="list">
            <h3>Lista de Tarefas</h3>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} >
                        <div className="row"> <strong>{index + 1 }</strong>  -  <strong>{tarefa.titulo}</strong> - {tarefa.informacao} -  {ativoFuncao(tarefa.estado)} </div>
                        <button onClick={() => dispatch({ tipo: "remover", payload: index })}>  Remover </button>
                        <button onClick={() => dispatch({ tipo: "concluida", payload: index })}>
                            Marcar como concluída
                        </button>

                    </li>
                ))}
            </ul>
            </div>
            {/* <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <button onClick={limparTarefas}>Limpar Tarefas</button>  */}


            {/* <button onClick={() => dispatch({tipo: "adicionar", payload: {titulo: }})} >Criar nova tarefa</button> */}
            {/* <button onClick={adicionarUmaTarefa}>Adicionar Tarefa</button> */}

            <div className="form">
            <button onClick={limparTarefas}>Limpar Lista de Tarefas</button>

            <div>
                <label htmlFor="">informo a tarefa q vc quer apagar <br /></label>
                <input type="number" value={local} onChange={(e) => setLocal(Number(e.target.value))} />
                <button onClick={() => removerTarefa(local - 1)} >remover tarefa</button>
            </div>
            </div>


{/* 
            <TarefasContext.Provider value={tarefas}>
            </TarefasContext.Provider> */}
        </div>
    )

}

export default TarefasReducer;