import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routs/Routs';
import {
  
  QueryClient,
  QueryClientProvider
} from "react-query";
 

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-slate-200">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;


//https://demo2.wpopal.com/autofiix/home-5/