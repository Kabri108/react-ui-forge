import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import IntroScreen from './Screens/IntroScreen';
import TemplatesScreen from './Screens/TemplatesScreen';
import QuickStartScreen from './Screens/QuickStartScreen';


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/getting-started" element={<QuickStartScreen />} /> {/* Renamed for clarity */}
        <Route path="/components" element={<HomeScreen />} /> {/* List of components */}
        <Route path="/components/:categoryId" element={<HomeScreen />} /> {/* Dynamic route */}
        <Route path="/templates" element={<TemplatesScreen />} /> {/* Lowercase route */}
      </Routes>
    </Router>
  );
}

export default App;
