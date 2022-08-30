
import {useState, createContext, useEffect} from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({children}){

    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('Marcio');

    async function DataSave(nome, email, level, personagem){
        await firebase.firestore().collection('HellfireClub')
        .doc()
        .set({
            nome: nome,
            email: email,
            level: level,
            personagem: personagem
        })
        .then(()=>{
            alert("Cadastrado com sucesso");
        })
    }

    return(

        <AuthContext.Provider value={{ DataSave }}>
            {children}
        </AuthContext.Provider>
    );

}

