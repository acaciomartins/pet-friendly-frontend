import React from 'react';
import FormularioCadastro from '../Formulario';
import './styles.css';

export default function Cadastro() {
    return (
        <>
            <h1 className='titulo'>Cadastro</h1>
            <p style={{ paddingBottom: '60px' }}>Para testar, aperte F12 e veja na aba console os dados preenchidos no formulário assim que clicar no botão "Enviar"!</p>
            <FormularioCadastro></FormularioCadastro>

        </>
    )
}