import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getfetch = async () => {
    //es para que cada ves que mande una nueva url este como desde el principio la variable state
    setState({
      data: null,
      isLoading: true,
      hasError: null,
    })

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTimeout(() => {
        setState({
          data,
          isLoading: false,
          hasError: null,
        });
      }, 1000);
    } catch (error) {

      setTimeout(() => {
        setState({
          ...state,
          hasError: error,
        });
      }, 1000);
      
    }

    
  };

  useEffect(() => {
    getfetch();
  }, [url]);

  return {
    ...state,
  };
};
