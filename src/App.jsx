import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './paths/Home'
import Team from './paths/Team'
import Media from './paths/Media'
import Gift from './paths/Gift'

function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/media' element={<Media />}/>
        <Route path='/gift' element={<Gift />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
