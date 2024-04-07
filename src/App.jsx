
import { Outlet } from 'react-router'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Movielist } from './components/Movielist'
import { Data } from './components/Data'


function App() {
 

  return (
    <>
      <Header></Header>
      <Data/>
      <Outlet/>
      <Footer></Footer>
    </>
  )
}

export default App
