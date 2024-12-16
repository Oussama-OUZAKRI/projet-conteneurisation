import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDetails from './pages/StudentDetails';
import StudentsList from './pages/StudentsList';
import StudentForm from './pages/StudentForm';
import LoginForm from './pages/LoginForm';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StudentsList />}/>
          <Route path='/students/:id' element={<StudentDetails />}/>
          <Route path='/add-student' element={<StudentForm />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
