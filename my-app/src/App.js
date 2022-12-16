import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <nav className="nav">
        <Navbar/>
        <Profile/>
      </nav>
    </div>
  );
}

export default App;
