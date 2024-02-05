import ConvertScreen from './Screens/ConvertScreen';
import HomeScreen from './Screens/HomeScreen';
import LiveRateScreen from './Screens/LiveRateScreen';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/liverates" element={<LiveRateScreen />} />
        <Route path="/convert" element={<ConvertScreen />} />
      </Routes>
    </>
  );
};

export default App;
