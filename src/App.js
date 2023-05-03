import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import ProjetosPage from './pages/ProjetosPage';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<ProjetosPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
