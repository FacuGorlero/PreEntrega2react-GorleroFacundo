import './App.css';
import "./main.css";
import Navbar from './components/Navbar';
import { Route, Routes ,BrowserRouter} from "react-router-dom"
import { ItemListContainer } from './paginas/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
