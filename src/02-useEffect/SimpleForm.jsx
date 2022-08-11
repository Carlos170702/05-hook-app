import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'carlos',
    email: 'CarlosDev1@gmail.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState(
      {
        ...formState,
        [name]: value
      }
    )
  }

  /*
  useEffect(() => {
    console.log('useEffect called')
  },[])

  useEffect(() => {
    console.log('form change')
  }, [ formState ])
  
  useEffect(() => {
    console.log('email change')
  }, [ email ])
  
  useEffect(() => {
    console.log('userName change')
  }, [ username ])
  */
  
  
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


      {
        username === 'carlos' && <Message />
      }
      
    </>
  )
}
