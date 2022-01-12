import { Link } from "react-router-dom";

import './styles.css';

export default function Consulta() {
    return (
        <>
            <div className="main">
                <span className="titulo_consulta">Pet Frendly mais perto de você!</span>
            </div>
            <div className="content">
                <div className="form">
                <input id="cep" type="text" className="form-input" placeholder="CEP origem"/>
                </div>
                <div className="form">
                <input id="raio" type="text" className="form-input" placeholder="Distância (raio)"/>
                </div>
                <div className="find_btn">procurar pet frendly</div>
            </div>
        </>
    )
}