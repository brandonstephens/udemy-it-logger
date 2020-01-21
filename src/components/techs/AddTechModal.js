import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = event => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Empty fields',
      })
    } else {
      console.log(firstName, lastName)

      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="mb-4">Enter Tech</h4>
        <div className="row">
          <div className="input-field col s6">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>

          <div className="input-field col s6">
            <input type="text" name="lastName" value={lastName} onChange={event => setLastName(event.target.value)} />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn-large">
              Enter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '55rem',
  height: '50vh',
}

export default AddTechModal
