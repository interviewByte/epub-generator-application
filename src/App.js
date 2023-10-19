import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import EpubBookGenerator from './components/EpubBookGenerator';
function App() {
  return (
    <div>
      <EpubBookGenerator />
    </div>
  );
}

export default App;
