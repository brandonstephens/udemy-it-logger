import React from 'react'

const AddButton = props => {
  return (
    <div className="fixed-action-btn click-to-toggle">
      <a href="#!" className="btn-floating btn-large purple">
        <i className="large material-icons">menu</i>
      </a>
      <ul>
        <li>
          <a href="#tech-list-modal" className="btn-floating grey lighten-1 modal-trigger">
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating green modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
        <li>
          <a href="#add-log-modal" className="btn-floating blue modal-trigger">
            <i className="material-icons">add</i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AddButton
