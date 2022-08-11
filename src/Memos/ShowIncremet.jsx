
export const ShowIncremet = ({ increment }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={() => increment( 5 )}
        >
            Incrementar
        </button>

    )
}
