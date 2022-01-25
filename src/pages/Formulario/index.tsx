import { useForm } from "react-hook-form";
import { PropTypes, Usuario } from "../../model";



export default function FormularioCadastro(props: PropTypes) {
  const { register, handleSubmit } = useForm<Usuario>();
  // const onSubmit: SubmitHandler<Usuario> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(props.callBack)}>
      <label>Nome</label>
      <input {...register("nome")} />
      <label>Endereço</label>
      <input {...register("endereco")} />
      <input type="submit" />
    </form>
  );
}