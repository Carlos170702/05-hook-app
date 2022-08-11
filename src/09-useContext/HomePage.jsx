import { useContext } from "react"
import { UseContext } from "./context/UseContext";

export const HomePage = () => {
  const { user, addUser } = useContext(UseContext);

  return (
    <>
      <h1>HomePage {user?.name} </h1>
      <hr />HomePage

      <pre
        aria-label="pre"
      >
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        onClick={  () => addUser( { name: 'carlos', id: 123, email: 'carlosdev1@gmail.com'} ) }
        className="btn btn-primary"
        aria-label="button"
      >
        Agregar User
      </button>
    </>
  )
}
