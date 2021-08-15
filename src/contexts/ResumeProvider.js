import React, {useState, createContext} from 'react';

const ResumeContext = createContext({})

export function ResumeProvider ({children}){
    
    const [dados, setDados] = useState([]);
  
    function salvarInformacoes(info){
        const hasInfo = dados.filter(text => text.id !== info.id);
            setDados([...hasInfo, info]);
    }

    return(
        <ResumeContext.Provider value={{list: dados, salvarInformacoes}}>
            {children}
        </ResumeContext.Provider>
    )
}

export default ResumeContext;