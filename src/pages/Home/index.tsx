import { Link } from "react-router-dom";
import FormularioCadastro from "../Formulario";

import './styles.css';

export default function Home() {
    return (
        <>
            <div className="App">
                <h1 className="titulo">Pet Friendly</h1>
                <Link to="/logon" >Entre</Link>
                <Link to="/cadastro" >Cadastre-se</Link>
            </div>
        </>
    )
}