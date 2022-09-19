import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import Post from "./pages/Post"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      
     < Header />
       
          <Routes>

  <Route path="/home" element={<Home />}/>
  <Route path="/" element={<Home />}/>
  <Route path="/post/:id" element={<Post />} />

         </Routes>
    </div>
  );
}

export default App;
