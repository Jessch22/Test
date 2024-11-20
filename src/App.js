import './App.css';
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>  
    </div>
  );
}

export default App;
