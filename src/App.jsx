import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './views/Login';
import Bookslist from './views/Bookslist';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={localStorage.getItem('token') ? <Bookslist /> : <Login />} />
      </Routes>
    </Router>
  )
}

export default App