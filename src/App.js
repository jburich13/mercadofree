
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NotFound from "./components/404"
import {FormProvider} from "./components/context/FormContext"
import {CartProvider} from "./components/context/CartContext"
import {CartView} from "./components/CartView";
import {TotalPrice} from "./components/TotalPrice"
import SignupForm from './components/SingupForm';







function App() {
    return (
         <FormProvider>
               <CartProvider>
               <BrowserRouter>
               <NavBar className="color-nav"></NavBar>
                    <Switch>
                         <Route exact path="/login">
                              <SignupForm>
                                   
                              </SignupForm>
                         </Route>
                         <Route exact path="/">
                              <ItemListContainer>
                              </ItemListContainer>    
                         </Route>
                         <Route exact path="/category">
                              <ItemListContainer>
                              </ItemListContainer>   
                         </Route>
                         <Route exact path="/cart">
                              <CartView>
                              </CartView>
                              <TotalPrice></TotalPrice>   
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