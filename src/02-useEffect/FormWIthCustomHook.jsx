
import { useForm } from "../Hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',

  });

  const { username, email, password } = formState;

  return (

    <>
      <h1>Formulario simple</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-10"
        placeholder="CarlosDev1@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-10"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button
        onClick={onResetForm}
        className="btn btn-primary mt-3"
      >Borrar</button>

    </>
  )
}
