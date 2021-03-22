

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/NavBar"
import {Items} from "./components/Items"



function App() {
    return (    
        <div>
            <NavBar />
            <ItemListContainer>
                <Items nombre="item1" stock={5}></Items>
                <Items nombre="item2" stock={10}></Items>
                <Items nombre="item3" stock={4}></Items>
                <Items nombre="item4" stock={2}></Items>
                <Items nombre="item5" stock={7}></Items>
            </ItemListContainer>
        </div>    
       
    );

}

export default App;