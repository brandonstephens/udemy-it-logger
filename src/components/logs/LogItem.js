import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrent, deleteLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent, ...props }) => {
  const { id, message, attention, date, tech } = log
  const onDelete = () => {
    deleteLog(id)
    M.toast({ html: `Log #${id} Deleted` })
  }

  return (
    <li {...props} className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? 'purple-text' : 'grey-text text-darken-2'}`}
          onClick={() => setCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by <span className="black-text">{tech}</span> on{' '}
        </span>
        <br />
        <span className="grey-text">
          <Moment format="YYYY-MM-DD hh:mm:ss a" />
        </span>

        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(
  null,
  { deleteLog, setCurrent }
)(LogItem)
