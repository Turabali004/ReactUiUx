import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import About from './pages/About'
import Services from './pages/Services'
import Home from './pages/Home'
import ServicesDetail from './pages/ServicesDetail'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/servicedetail' element={<ServicesDetail/>}/>
      </Route>
    </Routes>

    </>
  )
}

export default App
