import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

const TechListModal = props => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  const getTechs = async () => {
    setLoading(true)
    const response = await fetch('/techs')
    const data = await response.json()

    setTechs(data)
    setLoading(false)
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Tech List</h4>
        <ul className="collection">
          {!loading && techs.length === 0 ? (
            <p className="center">No techs yet</p>
          ) : (
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  )
}

export default TechListModal
