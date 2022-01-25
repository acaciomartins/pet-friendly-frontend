import { SubmitHandler } from "react-hook-form";

export interface PropTypes {
  callBack: SubmitHandler<Usuario>;
}

export interface Usuario {
  nome: String;
  endereco: String;
}

export enum SexoEnum {
  feminino = "feminino",
  masculino = "masculino",
  outro = "outro",
}
