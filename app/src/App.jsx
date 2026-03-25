import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BitaxePage from './pages/BitaxePage';
import KoshhPage from './pages/KoshhPage';
import { usePageView } from './lib/analytics';

function App() {
  usePageView();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bitaxe" element={<BitaxePage />} />
      <Route path="/koshh" element={<KoshhPage />} />
    </Routes>
  );
}

export default App;
