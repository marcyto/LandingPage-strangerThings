
import { useContext } from "react";
import { Route } from "react-router-dom";
import {AuthContext} from "../contexts/auth";


export default function RouteWrapper({
    component: Component,
    ...rest
}){

    const {loading} = useContext(AuthContext);

    if(loading){
        return(
            <div>
                <h1>Carregando</h1>
            </div>
        )
    }


    return(
        <Route
            {...rest}
            render={props => (
                <Component {...props}/>
            )}
        />        
    )
}

