

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/NavBar"
import Items from "./components/items"



function App() {
    return (    
        <div>
            <NavBar />
            <ItemListContainer>
                <Items nombre="item1"></Items>
                <Items nombre="item2"></Items>
                <Items nombre="item3"></Items>
                <Items nombre="item4"></Items>
                <Items nombre="item5"></Items>
            </ItemListContainer>
        </div>    
       
    );

}

export default App;