import React from "react";

const ExContext = React.createContext();

const data = {
    title: "This is title",
    body: "This is body"
}

const ExProvider =({children}) => {

    const [exData] = React.useState(data);

    return (
        <ExContext.Provider value={{exData}}>
            {children}
        </ExContext.Provider>
    )
}
export const useExProviderContext = () => React.useContext(ExContext);

export default ExProvider;