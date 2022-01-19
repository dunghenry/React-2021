
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodo from './components/ListTodo';
function App() {
  return (
    <div className="container text-center mt-5">
        <h1>Todos app with React by Dung Henry</h1>
        <ListTodo/>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
    </div>
  );
}

export default App;
