
import './App.css';
import { useState , useCallback} from 'react';
import HeaderComponent from './components/HeaderComponent';
import ContentComponent from './components/ContentComponent';
import StateFuntionComponent from './components/StateFuntionComponent';
import StateClassComponent from './components/StateClassComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseMemoComponent from './components/UseMemoComponent';
import ChildComponent from './components/ChildComponent';
import ParentsComponent from './components/React.memo/ParentsComponent'
import UseRefComponent from './components/UseRef/UseRefComponent';
import UseReducer from './components/UseReducer/UseReducer'
function App() {
  const [users, setUsers] = useState([]);
  const getData = useCallback((type) =>{
    return fetch(`https://reqres.in/api/${type}`)
  }, [])
  const handleClick = () =>{
    getData('users')
    .then((res) => res.json())
    .then((res) =>{
      const users = res.data;
      setUsers(users);
    })
  }
  return (
    <div className="App">
       {/* <HeaderComponent /> */}
      {/* <ContentComponent/> */}
      {/* <StateFuntionComponent/>
      <StateClassComponent/> */}
      {/* <UseEffectComponent/> */}
      {/* <UseMemoComponent/> */}
      {/* <p>Data: </p>
      <button onClick={() =>handleClick()}>Get users</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData}/> */}
      {/* <ParentsComponent/> */}
      {/* <UseRefComponent/> */}
      <UseReducer/>
    </div>
  );
}

export default App;
