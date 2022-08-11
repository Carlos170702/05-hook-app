import { useState } from "react";
import { useEffect } from "react"

export const Message = () => {

    const [cornd, setCornd] = useState({ x:0, y:0 })

    const onMouseMove = ({ x, y }) => {
        setCornd( {x, y} );
    }

    useEffect(() => {
      
        window.addEventListener( 'mousemove', onMouseMove);
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove)
      }
    }, [])
    

  return (
    <>
        <h3>usuario ya existe</h3>
        {JSON.stringify(cornd)}
    </>
  )
}
