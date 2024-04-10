import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { movies } from '../movieData'
import Movielist from './component/Movielist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Movielist movies={movies.results}/>
    </>
  )
}

export default App
