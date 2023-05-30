import './App.css';
import Header from './containers/header';
import Main from './components/main';
import Project from './components/project';
import Roadmap from './components/roadmap';
import Partners from "./components/partners";
import Pricefeed from './components/pricefeed';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Project/>
      <Pricefeed/>
      <Roadmap/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
