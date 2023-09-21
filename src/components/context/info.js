import { createContext, useState } from "react";

const infoContext = createContext();

const InfoProvider = ({ children }) => {
    const [infoDetails, setInfoDetails] = useState({ cityName: '', stateName: '' });

    return (
        <infoContext.Provider value={[infoDetails, setInfoDetails]}>
            {children}
        </infoContext.Provider>
    )
}

const useInfo = () => createContext(infoContext);

export { InfoProvider, useInfo };