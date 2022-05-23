import React from "react";

export const LoadingContext = React.createContext({
  isLoading: false,
  setLoading: (isLoading: boolean) => {},
});

function LoadingProvider(props: { children: any }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const setLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
