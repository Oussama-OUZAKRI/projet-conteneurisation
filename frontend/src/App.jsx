import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import StudentDetails from './pages/StudentDetails';
import StudentsList from './pages/StudentsList';
import StudentForm from './pages/StudentForm';
import LoginForm from './pages/LoginForm';
import ProtectedRoute from './utils/ProtectedRoute';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');

  const handleLogin = (newToken) => {
    if (!newToken) {
      console.error("Invalid token passed to handleLogin");
      return;
    }
    setToken(newToken);
    localStorage.setItem('jwtToken', newToken);
  };
  
  return (
    <>
      <Router>
        <Routes>
          {/* Route Login */}
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

          {/* Routes Protégées */}
          <Route element={<ProtectedRoute token={token} />}>
            <Route path='/' element={<StudentsList />}/>
            <Route path='/students/:id' element={<StudentDetails />}/>
            <Route path='/add-student' element={<StudentForm />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
