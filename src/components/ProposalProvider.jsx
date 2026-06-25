import { createContext, useState } from "react";

export const ProposalContext = createContext();

const ProposalProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  return (
    <ProposalContext.Provider
      value={{
        name,
        setName,
        place,
        setPlace,
        date,
        setDate,
      }}
    >
      {children}
    </ProposalContext.Provider>
  );
};

export default ProposalProvider;
