import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import './App.css'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })

  return (
    <div>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </div>
  )
}

export default App
