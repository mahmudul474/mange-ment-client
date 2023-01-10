import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routs/Routs';

function App() {
  return (
    <div className="App bg-slate-200">
     <RouterProvider router={router}></RouterProvider>
   
    </div>
  );
}

export default App;
