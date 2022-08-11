import { useLayoutEffect, useRef, useState } from "react"

export const Quotes = ({ quote, author }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        //getBoundingClientRect sirve para saber el tamaño del layout de la etiqueta html
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({
            width,
            height,
        });
    }, [])

    return (
        <>
            <blockquote
                ref={pRef}
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
            
                <p
                    className="mb-3"
                >{quote}</p>
            
                <footer
                    className="blockquote-footer"
                >{author}</footer>
            
            </blockquote>


            <code className="code">
                {
                    JSON.stringify(boxSize)
                }
            </code>
        </>
    )
}
