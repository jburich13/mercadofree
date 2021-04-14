
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NotFound from "./components/404"
import {FormProvider} from "./components/context/FormContext"
import {CartProvider} from "./components/context/CartContext"






function App() {
    return (
         <FormProvider>
               <CartProvider>
               <BrowserRouter>
               <NavBar />
              
                    <Switch>
                         <Route exact path="/">
                              <ItemListContainer>
                              </ItemListContainer>    
                         </Route>
                         <Route exact path="/category">
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
                         <Route path="*">
                              <NotFound>
                              </NotFound>
                         </Route>
                    </Switch>
               </BrowserRouter>   
               </CartProvider> 
         </FormProvider>
        
       
       
    );

}

export default App;