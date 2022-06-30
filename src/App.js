import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}/>
           
          
        </Routes>
      <Footer/>

     </Router>
    </div>
  );
}

export default App;
