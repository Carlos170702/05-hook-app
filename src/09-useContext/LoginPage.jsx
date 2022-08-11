import { useContext } from "react"
import { UseContext } from "./context/UseContext";

export const LoginPage = (props) => {
  const { user } = useContext(UseContext);
  console.log(user)

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}
