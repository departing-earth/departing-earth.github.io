import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Wormhole from './pages/Wormhole'
import FactsPage from './pages/ExoPlanetFacts'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    const [count, setCount] = useState(0)

    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wormhole" element={<Wormhole />} />
            <Route path="/facts" element={<FactsPage />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Wormhole from './pages/Wormhole'; // Import the Wormhole page
// import Home from './pages/Home'; // Your existing home page

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={Home} />
//                 <Route path="/wormhole" component={Wormhole} />
//                 {/* Add other routes as needed */}
//             </Switch>
//             <Link to="/wormhole">Travel to Wormhole</Link> {/* Link to navigate to the wormhole page */}
//         </Router>
//     );
// };

// export default App;