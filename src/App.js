import { Navbar } from './Component/navbar/Navbar.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { BrowserRouter, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
