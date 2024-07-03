import { Navbar } from './Component/navbar/Navbar.jsx';
import { SingleCategory } from './Component/singleCategory/SingleCategory.jsx';
import { SingleProduct } from './Component/singleProduct/SingleProduct.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const getSingleCategory = 'https://dummyjson.com/products/category/';
const getSingleProduct = 'https://dummyjson.com/products/';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<SingleProduct url={getSingleProduct} />} />
          <Route path='/category/:name' element={<SingleCategory url={getSingleCategory} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
