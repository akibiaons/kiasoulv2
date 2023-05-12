import { useAffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './scenes/home/Home'; // Folder does not exist yet
import ItemDetails from './scenes/itemDetails/ItemDetails';
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from './scenes/global/Navbar';

const scrollToTop = () => {
  const { pathname } = useLocation();

  useAffect(()=>{
    window.scrollTo(0, 0);
  }, [[pathname]])

  return null;
}; // This function makes it so that users start at the top of a new page when clicking a link.

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />  
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;