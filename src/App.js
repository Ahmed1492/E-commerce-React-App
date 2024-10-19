import { Navbar } from './Component/navbar/Navbar.jsx';

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { SingleProduct } from './pages/singleProduct/SingleProduct.jsx';
import { SingleCategory } from './pages/singleCategory/SingleCategory.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { Cart } from './pages/cart/Cart.jsx';

const getSingleCategory = 'https://dummyjson.com/products/category/';
const getSingleProduct = 'https://dummyjson.com/products/';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<SingleProduct url={getSingleProduct} />} />
          <Route path='/category/:name' element={<SingleCategory url={getSingleCategory} />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
