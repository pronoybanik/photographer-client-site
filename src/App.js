import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import router from './conponent/Routers/Router/Router';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto font-serif'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
