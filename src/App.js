

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/NavBar"
import {Items} from "./components/Items"
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
    return (    
        <div>
            <NavBar />
            <ItemListContainer>
            </ItemListContainer>
        </div>    
       
    );

}

export default App;