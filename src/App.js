import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Hero />
        <Routes>
          <Route path="/"></Route>
          <Route path="/features">Features</Route>
          <Route path="/company">Company</Route>
          <Route path="/careers">Careers</Route>
          <Route path="/about">About</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
