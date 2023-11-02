import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Routes, Route as RouteElement} from 'react-router-dom'
import Home from './Components/Home'
import Content from './Components/Content'
import KnowMore from './Components/KnowMore'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to ="/KnowMore">Know More</Link>
            </li>
            <li>
              <Link to = "/Content">Content</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <RouteElement path ="/" element={<Home />} />
          <RouteElement path = "/KnowMore" element={<KnowMore />} />
          <RouteElement path = "/Content" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


