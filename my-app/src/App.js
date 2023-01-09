import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from'./components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Contact from './components/Contact/Contact';
import Photo from './components/Photo/Photo';


function App(props) {

  
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <nav className="nav">
        <Navbar />
        <div className='app-wrapper-content'>
        {/* <Dialogs  /> */}
        {/* <Profile /> */}
        
      <Routes>
              <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}  />} />
              <Route path='/profile' element={<Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/photo' element={<Photo />} />
      </Routes>

        </div>
      </nav>
    </div>
    </BrowserRouter>
  )
}

export default App;
