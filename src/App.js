import Header from "./components/Header/header";
import {BrowserRouter as Router, Routes, Route, } from  'react-router-dom'
import Main from "./components/Main/main"
import Another from "./components/pages/Another";
import { useEffect, useState } from "react";

function App() {

  const [productsSum, setProductsSum] = useState(0)
  const [countsSum, setCountsSum] = useState(0)


  const addProduct = (price) => {
    setProductsSum(productsSum => productsSum + parseInt(price));
    setCountsSum(countsSum => countsSum + 1);
  }

  const [addCard, setAddCard]=useState([])

  useEffect(()=>{
    fetch('{products}')
    .then(response => response.json())
    .then(data => setAddCard(data))
  }, [])

    return (
      <Router>
        <div className="App">
        <Header />
        <div></div>
        <Routes>
          <Route path='/home' element={<Main />}/>
          <Route path='/shop' element={<Another addCart={ addProduct}/>}/>
        </Routes>
        </div>
      </Router>
    );
}

export default App;
