import { Link } from "react-router-dom";
import Counter from "../components/Counter";


const Home = () =>{

    return(
        <div>
            <Link to="/contador">Contador</Link>
            <br />
            <Link to="/ContadorReducer">Contador reducer</Link>
            <br />
            <Link to="/TarefasReducer" > Tarefas Reducer</Link>

        </div>
    )
}

export default Home;