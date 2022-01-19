import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import MyComponent from './components/MyComponent';
import NavComponent from './components/NavComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App container">
      <NavComponent/>
     {/* <Header msg="This is content"/> */}
     {/* <Content fullname="Tran Van Dung" age="20" /> */}
     {/* <Footer/> */}
     {/* <MyComponent/> */}
    </div>
  );
}

export default App;
