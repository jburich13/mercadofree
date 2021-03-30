

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar"
import {BrowserRouter, Switch, Route} from "react-router-dom"




function App() {
    return (
        <BrowserRouter>
         <NavBar />
    

           <Switch>
               <Route exact path="/">
                    <ItemListContainer>
                    </ItemListContainer>   
               </Route>
               <Route path="/category/:categoryid">
                    <ItemListContainer>
                    </ItemListContainer>   
               </Route>
               <Route path="/item/:itemid">
                    <ItemDetailContainer>
                    </ItemDetailContainer>   
               </Route>
           </Switch>
            
        </BrowserRouter>    
       
       
    );

}

export default App;