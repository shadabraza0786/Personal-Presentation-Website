import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import PortfolioPage from "./pages/Portfolio";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Now we are creating function based components

function App(){
  return(
    <Switch>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Services" component={Services}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Portfolio" component={PortfolioPage}/>
          <Footer/>
        </div>
      </Switch>
  );
}
export default App;
