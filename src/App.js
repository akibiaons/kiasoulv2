import { useAffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './scenes/home/Home'; // Folder does not exist yet
import ItemDetails from './scenes/itemDetails/ItemDetails';

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
        <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="checkout" element={<Checkout />} />        
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;