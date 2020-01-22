import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import { updateLog } from '../../actions/logActions'

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    if (current) {
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
  }, [current])

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Empty fields',
      })
    } else {
      const newLogData = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      }
      updateLog(newLogData)
      M.toast({ html: `Updated log ${current.id}` })

      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="mb-4">Edit System Log</h4>
        <div className="row">
          <div className="input-field col s12">
            <input type="text" name="message" value={message} onChange={event => setMessage(event.target.value)} />
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  current: state.log.current,
})

export default connect(
  mapStateToProps,
  { updateLog }
)(EditLogModal)
