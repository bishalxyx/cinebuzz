import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Popular } from './components/Popular.jsx';
import { Movielist } from './components/Movielist.jsx';
import { Upcoming } from './components/Upcoming.jsx';
import { Moviepage } from './components/Moviepage.jsx';
import { Bag } from './components/Bag.jsx';
import { Provider } from 'react-redux';

  import movieStore from './store/index.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
    children: [
      {
        path: "popular",
        element: <Popular />
  
      },
      {
        path:"/",
        
        element:<Movielist/>
      },
      {
        path:"upcoming",
        element:<Upcoming/>
      },
      {
        path:"movie/:id",
        element:<Moviepage/>
      },
      {
        path:"bag",
        element:<Bag/>
      }
      
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={movieStore}>
     <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>,
)
