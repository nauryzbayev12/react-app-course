import { MainLayout } from './components/MainLayout'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddQuestionPage } from './Pages/AddQuestionPage/AddQuestionPage'
import { HomePage } from './Pages/HomePage/HomePage'
import { NotFoundPage } from './Pages/NotFoundPage'
import { QuestionPage } from './Pages/QuestionPage'
import { TestPage } from './Pages/TestPage/TestPage'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/forbiden' element={<div>forbiden !!!</div>}/>
        <Route path='/question/:id' element={<QuestionPage/>} />
        <Route path='/testpage' element={<TestPage/>} />
        <Route path='/addquestion' element={<AddQuestionPage/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
