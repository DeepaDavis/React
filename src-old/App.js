import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

function App() {
  return (
    <div className="App">
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
   </div>
  );
}
export default App;
