
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';


function App() {
  return (
    <Router> 
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/components/:categoryId" element={<HomeScreen />} /> {/* Dynamic route */}
    </Routes>
  </Router>
  );
}

export default App
