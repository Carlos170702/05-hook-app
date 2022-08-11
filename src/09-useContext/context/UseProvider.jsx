import { useState } from "react"
import { UseContext } from "./UseContext"

export const UseProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const addUser = ( value ) =>{
    setUser(value)
  }
  return (
    // <UseContext.Provider value={{ hola: 'mundo', user }} >
    <UseContext.Provider value={{user, addUser}} >
      {children}
    </UseContext.Provider>
  )
}
