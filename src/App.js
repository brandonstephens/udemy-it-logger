import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
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
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </div>
  )
}

export default App
