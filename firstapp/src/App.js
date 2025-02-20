import Btn from './components/Btn';
import './App.css';
import ModeToggler from './components/ModeToggler';
import Register from './components/Register';
import InputFocusBtn from './components/InputFocusBtn';
import ExProvider from './providers/ExProvider';
import FirstChild from './components/FirstChild';
import ExReducer from './components/ExReducer';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import {Routes, Route, Link} from 'react-router-dom';
import ExMap from './components/ExMap';
import ExKey from './components/ExKey';
import ExForm from './components/ExForm';
import ExFetch from './components/ExFetch';
import Containment from './components/Containment';
import Radio from './components/Radio';
import Mouse from './components/Mouse';

function App() {
  return (
    <div className="App">  
      Hello World
      {/* <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">AboutMe</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
      </Routes> */}
      {/* <Header title="This is Heading text"/>
      <Btn/>
      <ModeToggler/>
      <Register/>
      <InputFocusBtn/> */}
      {/* <ExProvider>
        <FirstChild/>
      </ExProvider>
      <ExReducer/> */}
      {/* <ExMap/> */}
      {/* <ExKey /> */}
      <ExForm/>
      {/* <ExFetch/> */}
      {/* <Containment/> */}
      {/* <Radio/> */}
      {/* <Mouse /> */}
    </div>
  )
}

function Header(props){
  return <h1>{props.title}</h1>;
}

export default App;
