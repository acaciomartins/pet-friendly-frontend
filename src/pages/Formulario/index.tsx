import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

enum SexoEnum {
  feminino = "feminino",
  masculino = "masculino",
  outro = "outro"
}

interface Usuario {
  nome: String;
  endereco: String;
}

export default function FormularioCadastro() {
  const { register, handleSubmit } = useForm<Usuario>();
  const onSubmit: SubmitHandler<Usuario> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome</label>
      <input {...register("nome")} />
      <label>Endereço</label>
      <input {...register("endereco")} />
      <input type="submit" />
    </form>
  );
}