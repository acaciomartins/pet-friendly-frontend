import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Usuario } from '../../model';
import FormularioCadastro from '../Formulario';
import './styles.css';

const onSubmit: SubmitHandler<Usuario> = data => {
    console.log('Chamada callBack - SubmitHandler<Usuario>');
    console.table(data);
};

export default function Cadastro() {
    return (
        <>
            <h1 className='titulo'>Cadastro</h1>
            <p style={{ paddingBottom: '60px' }}>Para testar, aperte F12 e veja na aba console os dados preenchidos no formulário assim que clicar no botão "Enviar"!</p>
            <FormularioCadastro callBack={onSubmit}></FormularioCadastro>

        </>
    )
}