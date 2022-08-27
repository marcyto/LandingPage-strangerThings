
import Route from './routes';
import Home from "../pages/Home";
import { Switch } from "react-router-dom";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    );
}