import './App.css';
import ProductComponent from './container/ProductComponent';
import ProductListing from './container/ProductListing';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createHashHistory } from 'history';

function App() {
  const history = createHashHistory();
  return (
    <div className="App">
      <h1>Redux demo</h1>
      <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<ProductListing />}/>
        <Route path="/product" element={<ProductComponent />} />
        
      </Routes>
      <Link to="/">ProductListing</Link>|
      <Link to="/product">ProductComponent</Link>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
