import { useCounter, useFetch } from "../Hooks";
import { Loading, Quotes } from "../03-examples";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter();

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote, author } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad Quotes</h1>

      <hr />

      {
        isLoading
          ? (
            < Loading />
          )
          : (
            < Quotes quote={quote} author={author} />
          )
      }

      <div className="buttons">
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => increment(1)}
        >Next quote</button>


        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => decrement(1)}
        >Previous quote</button>
      </div>

    </>
  )
}
