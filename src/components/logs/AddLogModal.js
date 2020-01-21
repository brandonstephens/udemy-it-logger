import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = props => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const onSubmit = event => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Empty fields',
      })
    } else {
      console.log(event.target.value)
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="mb-4">Enter System Log</h4>
        <div className="row">
          <div className="input-field col s12">
            <input type="text" name="message" value={message} onChange={event => setMessage(event.target.value)} />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>

          <div className="input-field col s12">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={event => setTech(event.target.value)}
            >
              <option value="" disabled>
                Select Tech
              </option>
              <option value="John Wick">John Wick</option>
              <option value="Bob Belcher">Bob Belcher</option>
              <option value="Mia Wallace">Mia Wallace</option>
            </select>
          </div>
          <div className="input-field col s12">
            <p>
              <label>
                <input
                  type="checkbox"
                  value={attention}
                  checked={attention}
                  className="filled-in"
                  onChange={e => setAttention(!attention)}
                />{' '}
                <span>Needs attention</span>
              </label>
            </p>
          </div>

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

export default AddLogModal
