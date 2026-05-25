import { MainLayout } from './components/MainLayout'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<div>home</div>} />
        <Route path='/forbiden' element={<div>forbiden !!!</div>}/>
        <Route path='/addquestion' element={<div>add question</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
