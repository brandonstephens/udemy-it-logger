import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const LogItem = ({ log, ...props }) => {
  const { id, message, attention, date, tech } = log
  return (
    <li {...props} className="collection-item">
      <div>
        <a href="#edit-log-modal" className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}>
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by <span className="black-text">{tech}</span> on{' '}
          <Moment format="MMMM Do YYYY, h:mm:ss a" />
        </span>

        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
}

export default LogItem
