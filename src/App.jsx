import { MainLayout } from './components/MainLayout'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/HomePage'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/forbiden' element={<div>forbiden !!!</div>}/>
        <Route path='/addquestion' element={<div>add question</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
