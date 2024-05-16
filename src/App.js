import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Objective from './components/Objective';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Objective/>
      <Footer/>
    </div>
  );
}

export default App;
