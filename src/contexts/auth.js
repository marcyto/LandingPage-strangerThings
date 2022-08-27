
import {useState, createContext, useEffect} from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({children}){

    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('Marcio');

    return(

        <AuthContext.Provider value={{ signed: loading, name}}>
            {children}
        </AuthContext.Provider>
    );

}

