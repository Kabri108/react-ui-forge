
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import IntroScreen from './Screens/IntroScreen';
import TemplatesScreen from './Screens/TemplatesScreen';


function App() {
  return (
    <Router> 
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/components" element={<HomeScreen />} />
      <Route path="/components/:categoryId" element={<HomeScreen />} /> {/* Dynamic route */}
      <Route path="/Templates" element={<TemplatesScreen />} />
    </Routes>
  </Router>
  );
}

export default App
