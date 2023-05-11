import { useAffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

const scrollToTop = () => {
  const { pathname } = useLocation();

  useAffect(()=>{
    window.scrollTo(0, 0);
  }, [[pathname]])

  return null;
}; // This function makes it so that users start at the top of a new page when clicking a link.

function App() {
  return <div className="app"></div>
}

export default App;