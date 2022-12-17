import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/profile';


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
