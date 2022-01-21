import './styles.css';
import React, { useState, useEffect } from 'react';
import { userInfo } from 'os';


interface Usuario{
    nome: string;
    telefone: number;
    email: string;
    cep: number;
    rua?: string;
    numero?: number;
    bairro?: string;
    complemento?: string;
    cidade?: string;
    uf?: string;
    latitude?: number;
    longitude?: number;
    }

    export default function CadastrarUsuario(){

    const [usuario, setUser] = useState<Usuario>({'nome':'', 'telefone':0, 'email':'', 'cep':0})

    const handleUserChange=(e)=>{
        if(e.target.getAttribute('name')=='user.nome'){
            setUser({'nome':e.target.value, 'telefone':usuario.telefone, 'email':usuario.email, 'cep':usuario.cep})
        }else if(e.target.getAttribute('name')=='user.telefone'){
            setUser({'nome':usuario.nome, 'telefone':e.target.value, 'email':usuario.email, 'cep':usuario.cep})
        }else if(e.target.getAttribute('name')=='user.email'){
            setUser({'nome':usuario.nome, 'telefone':usuario.telefone, 'email':e.target.value, 'cep':usuario.cep})
        }else if(e.target.getAttribute('name')=='user.cep'){
            setUser({'nome':usuario.nome, 'telefone':usuario.telefone, 'email':usuario.email, 'cep':e.target.value})
        }
    }

    return (

        <>
            <h2>Seja bem vindo!</h2> 
            <h2>Cadastre-se em nossa plataforma e  tenha acesso a varios beneficios.</h2>
            <br/>

            <label>Nome:</label>
            <input type='text' name='user.nome' value={usuario.nome} onChange={(e)=>handleUserChange(e)}/>
            <br/>
            <label>Telefone:</label>
            <input type='number' name='user.telefone' value={usuario.telefone} onChange={(e)=>handleUserChange(e)}/>
            <br/>
            <label>Email:</label>
            <input type='text' name='user.email' value={usuario.email} onChange={(e)=>handleUserChange(e)}/>
            <br/>
            <label>CEP:</label>
            <input type='number' name='user.cep' value={usuario.cep} onChange={(e)=>handleUserChange(e)}/>
            <br/>

            <p> Nome: {usuario.nome} </p>
            <p> Telefone: {usuario.telefone} </p>
            <p> E-mail: {usuario.email} </p>
            <p> CEP: {usuario.cep} </p>

        </>
    );
}

    /*const [location, setLocation] = useState({});

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(hendlePositionReceived)

        return () => navigator.geolocation.clearWatch(hendlePositionReceived)
    }, []);

    function hendlePositionReceived() {
        const { latitude, longitude } = coord;

        setLocation({ latitude, longitude });
    }
    */