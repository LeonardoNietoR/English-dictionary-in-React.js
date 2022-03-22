import React from "react";

const ResultConext = React.createContext({
   resultSearch: {},
   changeResult: () => {},
   error: { errorMessage: "", status: "" },
   isLoading: false,
   setIsLoading: () => {},
});

export default ResultConext;
