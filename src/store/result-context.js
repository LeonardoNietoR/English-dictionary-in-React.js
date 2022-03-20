import React from "react";

const ResultConext = React.createContext({
   resultSearch: {},
   changeResult: () => {},
   error: { errorMessage: "", status: "" },
});

export default ResultConext;
